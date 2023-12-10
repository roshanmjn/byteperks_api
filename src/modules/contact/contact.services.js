const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");
const { sendEmbed } = require("../../utils/embed_mailer.js");
const { contact } = require("../../utils/contact.js");
require("dotenv").config();

module.exports = {
    // GET all Contact Data
    getAllContactData: async () => {
        try {
            const query = `SELECT * FROM contact;`;
            const [contactData, fields] = await (await mysql).query(query);
            return contactData;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // GET  Contact Data by [id]
    getContactById: async (id) => {
        try {
            const query = `SELECT * FROM contact WHERE id=?;`;
            const [data, fields] = await (await mysql).query(query, id);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE new Contact Data
    createContactData: async (data) => {
        const { name, email, message } = data;
        const webhook = process.env.CONTACT;

        try {
            const query = `
            INSERT INTO contact(name,email,message) VALUES (?,?,?)
            `;
            const newContactData = await (
                await mysql
            ).query(query, [name, email, message]);
            if (newContactData[0].affectedRows == 0) {
                return new HttpException(500, "Contact Data insert failed");
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
                ],
            };
            sendEmbed(embed, webhook);
            await contact(email, name);
            return { status: "success", message: "Contact Data created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Contact Data
    updateContactData: async (id, data) => {
        const { name, email, message } = data;
        try {
            const query = `
            UPDATE contact SET 
                name = ?,email = ?,message = ?
            WHERE id = ?`;
            const updatedContactData = await (
                await mysql
            ).query(query, [name, email, message, id]);

            if (updatedContactData[0].affectedRows === 0) {
                return new HttpException(500, "Contact Data not found");
            }
            return { status: "success", message: "Contact Data updated" };
        } catch (err) {
            return new HttpException(500, "Contact Data not found");
        }
    },

    // DELETE a Contact Data item by ID
    deleteContactData: async (id) => {
        try {
            const query = `DELETE FROM contact WHERE id = ?`;
            const deletedContactData = await (await mysql).query(query, id);
            if (deletedContactData[0].affectedRows === 0)
                return new HttpException(500, "Contact Data not found");

            return { status: "success", message: "Contact Data deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
