const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all Features Section
    getAllFeaturesSection: async () => {
        try {
            const query = `SELECT * FROM features`;
            const [featuresItem, fields] = await (await mysql).query(query);
            return featuresItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new Features Section
    createFeaturesSection: async (data) => {
        const { title, description, status, icon, content } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `
            INSERT INTO features(title, description, status, icon, content, uniqid ) VALUES (?, ?, ?, ?, ?, ?)
            `;
            const newFeaturesSection = await (
                await mysql
            ).query(query, [title, description, status, icon, content, uniqid]);
            if (newFeaturesSection[0].affectedRows == 0) {
                return new HttpException(500, "Features Section insert failed");
            }
            return { status: "success", message: "Features Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Features Section
    updateFeaturesSection: async (id, data) => {
        const { title, description, status, icon, content } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `UPDATE Features SET title=?,description=?,status=?,icon=?,content=?,uniqid=? WHERE id = ?`;
            const updatedFeaturesSection = await (
                await mysql
            ).query(query, [
                title,
                description,
                status,
                icon,
                content,
                uniqid,
                id,
            ]);

            if (updatedFeaturesSection[0].affectedRows === 0) {
                return new HttpException(500, "Features Section not found");
            }
            return { status: "success", message: "Features Section updated" };
        } catch (err) {
            return new HttpException(500, "Features Section not found");
        }
    },

    // DELETE a Features Section item by ID
    deleteFeaturesSection: async (id) => {
        try {
            const query = `DELETE FROM Features WHERE id = ?`;
            const deletedFeaturesSection = await (await mysql).query(query, id);
            if (deletedFeaturesSection[0].affectedRows === 0)
                return new HttpException(500, "Features Section not found");

            return { status: "success", message: "Features Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
