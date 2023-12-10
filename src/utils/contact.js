const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const contact = (email, fname) => {
    console.log(email, fname);
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

        // Read the email template file
        const emailTemplate = fs.readFileSync(
            "./src/utils/emails/contact.html",
            "utf8"
        );

        // Compile the email template with Handlebars
        const compiledTemplate = handlebars.compile(emailTemplate);

        // Compile the table template with the table data
        const tableHtml = compiledTemplate({ email, fname });

        // Define email options
        const mailOptions = {
            from: `${process.env.MAIL_FROM_ADDRESS} <${process.env.MAIL_USERNAME}>`,
            to: email,
            subject: "Thank you for contacting us !",
            html: tableHtml,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
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
};

module.exports = {
    contact,
};
