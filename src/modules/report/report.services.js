const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { sendEmbed } = require("../../utils/embed_mailer.js");
require("dotenv").config();
const { contact } = require("../../utils/contact.js");
module.exports = {
    // CREATE a new Report Section
    createReportSection: async (data) => {
        try {
            const webhook = process.env.REPORT;
            const { name, email, webpage_url, report_description } = data;
            const query = `
            INSERT INTO report(name, email, webpage_url, report_description) VALUES (?,?,?,?)
            `;
            const newGetStartedSection = await (
                await mysql
            ).query(query, [name, email, webpage_url, report_description]);
            if (newGetStartedSection[0].affectedRows == 0) {
                return new HttpException(500, "Report Section insert failed");
            }

            // SEND TO DISCORD AS EMBEDDED MESSAGE
            const embed = {
                title: "BytePerks Website Report",
                fields: [
                    {
                        name: "Reported By",
                        value: name,
                    },
                    {
                        name: "Email",
                        value: email,
                    },
                    {
                        name: "Reported Web URL",
                        value: webpage_url,
                    },
                    {
                        name: "Report",
                        value: report_description,
                    },
                ],
            };
            sendEmbed(embed, webhook);
            // await contact(email, name);
            // SEND RESPONSE TO CLIENT
            return {
                status: "success",
                message:
                    "Thank You For Reporting A Problem With The Webpage. We Will Contact You After Verifying!",
            };
        } catch (err) {
            throw new Error(err);
        }
    },
};
