const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors");

module.exports = {
    // GET all Hero Section
    getAllHeroByStatus: async () => {
        try {
            const query = `SELECT * FROM hero WHERE status = 'active' ORDER BY id DESC`;
            const [heroItems, fields] = await (await mysql).query(query);
            const query2 = `SELECT title,description FROM features WHERE status = 'featured' limit 3`;
            const [featuredItems, fields2] = await (await mysql).query(query2);
            heroItems[0].features = featuredItems;
            return heroItems;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new Hero Section
    createHeroSection: async (data) => {
        const { title, description, status, image } = data;
        try {
            const query = `
            INSERT INTO hero(title, description, status,image) VALUES (?, ?, ?,?)
            `;
            const newHeroSection = await (
                await mysql
            ).query(query, [title, description, status, image]);
            if (newHeroSection[0].affectedRows == 0) {
                return new HttpException(500, "Hero Section insert failed");
            }
            return { status: "success", message: "Hero Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Hero Section
    updateHeroSection: async (id, data) => {
        const { title, description, status, image } = data;
        try {
            const query = `UPDATE hero SET title=?,description=?,status=?,image=? WHERE id = ?`;
            const updatedHeroSection = await (
                await mysql
            ).query(query, [title, description, status, image, id]);

            if (updatedHeroSection[0].affectedRows === 0) {
                return new HttpException(500, "Hero Section not found");
            }
            return { status: "success", message: "Hero Section updated" };
        } catch (err) {
            return new HttpException(500, "Hero Section not found");
        }
    },

    // DELETE a Hero Section item by ID
    deleteHeroSection: async (id) => {
        try {
            const query = `DELETE FROM hero WHERE id = ?`;
            const deletedHeroSection = await (await mysql).query(query, id);
            if (deletedHeroSection[0].affectedRows === 0)
                return new HttpException(500, "Hero Section not found");

            return { status: "success", message: "Hero Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
