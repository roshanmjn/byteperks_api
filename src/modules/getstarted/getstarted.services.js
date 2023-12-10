const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { sendEmbed } = require("../../utils/embed_mailer.js");
require("dotenv").config();
const { contact } = require("../../utils/contact.js");
module.exports = {
    // GET all GetStarted Section
    getAllGetStartedSection: async () => {
        try {
            const query = `SELECT * FROM getstarted`;
            const [GetStartedSection, fields] = await (
                await mysql
            ).query(query);

            return GetStartedSection;
        } catch (err) {
            console.log(err);
        }
    }, // GET  getStarted Section by {ID}
    getAllGetStartedById: async (id) => {
        try {
            const query = `SELECT * FROM getstarted WHERE id=?`;
            const [GetStartedById, fields] = await (
                await mysql
            ).query(query, Number(id));

            return GetStartedById;
        } catch (err) {
            console.log(err);
        }
    },

    // CREATE a new GetStarted Section
    createGetStartedSection: async (data) => {
        const webhook = process.env.GET_STARTED;

        const {
            name,
            email,
            number,
            viber = false,
            whatsapp = false,
            address,
            service_type,
            pricing,
            message,
        } = data;
        try {
            const query = `
            INSERT INTO getstarted(name,email,number,viber,whatsapp,address,service_type,pricing,message) VALUES (?,?,?,?,?,?,?,?,?)
            `;
            const newGetStartedSection = await (
                await mysql
            ).query(query, [
                name,
                email,
                number,
                viber,
                whatsapp,
                address,
                service_type,
                pricing,
                message,
            ]);
            if (newGetStartedSection[0].affectedRows == 0) {
                return new HttpException(
                    500,
                    "GetStarted Section insert failed"
                );
            }

            // SEND TO DISCORD AS EMBEDDED MESSAGE
            const embed = {
                title: name,
                description: message,
                fields: [
                    {
                        name: "Email",
                        value: email,
                    },
                    {
                        name: "Phone Number",
                        value: number,
                    },
                    {
                        name: "Viber",
                        value: viber,
                        inline: true,
                    },
                    {
                        name: "WhatsApp",
                        value: whatsapp,
                        inline: true,
                    },
                    {
                        name: "Address",
                        value: address,
                    },
                    {
                        name: "Services",
                        value: service_type,
                        inline: true,
                    },
                    {
                        name: "Pricing Plans",
                        value: pricing,
                        inline: true,
                    },
                ],
            };
            // sendEmbed(embed, webhook);
            await contact(email, name);
            // SEND RESPONSE TO CLIENT
            return { status: "success", message: "GetStarted Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
    // SEND NEWS LETTER
    sendNewsLetter: async (data) => {
        const { email, message, subjects } = data;
        return new Promise((resolve, reject) => {
            const transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: true,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            });

            const compiledTemplate = handlebars.compile(message);
            const emailHtml = compiledTemplate({ email });
            const mailOptions = {
                from: `${process.env.MAIL_FROM_ADDRESS} <${process.env.MAIL_USERNAME}>`,
                to: email,
                subject: subjects,
                html: emailHtml,
            };

            // Send email
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.error(error);
                    resolve(false);
                } else {
                    console.log("Email sent: " + info.response);
                    resolve({
                        success: true,
                        message: "Email sent to " + email,
                    });
                }
            });
        });
    },

    // UPDATE a GetStarted Section by ID
    updateGetStartedSection: async (id, data) => {
        const {
            name,
            email,
            number,
            viber = false,
            whatsapp = false,
            address,
            service_type,
            pricing,
            message,
        } = data;
        try {
            const query = `UPDATE getstarted SET name=?,email=?,number=?,viber=?,whatsapp=?,address=?,service_type=?,pricing=?,message=? WHERE id = ?`;
            const updatedGetStartedSection = await (
                await mysql
            ).query(query, [
                name,
                email,
                number,
                viber,
                whatsapp,
                address,
                service_type,
                pricing,
                message,
                id,
            ]);

            if (updatedGetStartedSection[0].affectedRows === 0) {
                return new HttpException(500, "GetStarted Section not found");
            }
            return { status: "success", message: "GetStarted Section updated" };
        } catch (err) {
            return new HttpException(500, "GetStarted Section not found");
        }
    },

    // DELETE a GetStarted Section by ID
    deleteGetStartedSection: async (id) => {
        try {
            const query = `DELETE FROM getstarted WHERE id = ?`;
            const deletedGetStartedSection = await (
                await mysql
            ).query(query, id);
            if (deletedGetStartedSection[0].affectedRows === 0)
                return new HttpException(500, "GetStarted Section not found");

            return { status: "success", message: "GetStarted Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
