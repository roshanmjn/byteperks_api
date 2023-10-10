const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors");

module.exports = {
    // GET all trusted Section
    getAllTrustedSection: async () => {
        try {
            const query = `SELECT * FROM trusted;`;
            const [trustedItem, fields] = await (await mysql).query(query);
            return trustedItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new trusted Section
    createTrustedSection: async (data) => {
        const { image, title } = data;
        try {
            const query = `
            INSERT INTO trusted(image,title) VALUES (?, ?)
            `;
            const newTrustedSection = await (
                await mysql
            ).query(query, [image, title]);
            if (newTrustedSection[0].affectedRows == 0) {
                return new HttpException(500, "trusted Section insert failed");
            }
            return { status: "success", message: "trusted Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a trusted Section
    updateTrustedSection: async (id, data) => {
        const { image, title, status } = data;
        try {
            const query = `UPDATE trusted SET image=?,title=?,status=? WHERE id = ?`;
            const updatedTrustedSection = await (
                await mysql
            ).query(query, [image, title, status, id]);

            if (updatedTrustedSection[0].affectedRows === 0) {
                return new HttpException(500, "trusted Section not found");
            }
            return { status: "success", message: "trusted Section updated" };
        } catch (err) {
            return new HttpException(500, "trusted Section not found");
        }
    },

    // DELETE a trusted Section item by ID
    deleteTrustedSection: async (id) => {
        try {
            const query = `DELETE FROM trusted WHERE id = ?`;
            const deletedTrustedSection = await (await mysql).query(query, id);
            if (deletedTrustedSection[0].affectedRows === 0)
                return new HttpException(500, "trusted Section not found");

            return { status: "success", message: "trusted Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
