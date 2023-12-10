const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all social Section
    getAllSocialItems: async () => {
        try {
            const query = `SELECT * FROM socialmedia`;
            const [socialItems, fields] = await (await mysql).query(query);
            return socialItems;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new social Section
    createSocialSection: async (data) => {
        const { icon, name, url } = data;
        try {
            const query = `
            INSERT INTO socialmedia(icon,name,url) VALUES (?, ?, ?)
            `;
            const newSocialSection = await (
                await mysql
            ).query(query, [icon, name, url]);
            if (newSocialSection[0].affectedRows == 0) {
                return new HttpException(500, "Social Section insert failed");
            }
            return { status: "success", message: "Social Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a social Section
    updateSocialSection: async (id, data) => {
        const { icon, name, url, status } = data;
        try {
            const query = `UPDATE socialmedia SET icon=?,name=?,url=?,status=? WHERE id = ?`;
            const updatedSocialSection = await (
                await mysql
            ).query(query, [icon, name, url, status, id]);

            if (updatedSocialSection[0].affectedRows === 0) {
                return new HttpException(500, "Social Section not found");
            }
            return { status: "success", message: "Social Section updated" };
        } catch (err) {
            return new HttpException(500, "Social Section not found");
        }
    },

    // DELETE a social Section item by ID
    deleteSocialSection: async (id) => {
        try {
            const query = `DELETE FROM socialmedia WHERE id = ?`;
            const deletedSocialSection = await (await mysql).query(query, id);
            if (deletedSocialSection[0].affectedRows === 0)
                return new HttpException(500, "Social Section not found");

            return { status: "success", message: "Social Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
