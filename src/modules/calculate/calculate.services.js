const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all Calculate Section
    getAllCalculateSection: async () => {
        try {
            const query = `SELECT * FROM calculate;`;
            const [calculateItem, fields] = await (await mysql).query(query);
            return calculateItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    // CREATE a new Calculate Section
    createCalculateSection: async (data) => {
        const { divide, plan, prefix, status } = data;
        try {
            const query = `
            INSERT INTO calculate(divide,plan,prefix,status) VALUES (?,?,?,?)
            `;
            const newCalculateSection = await (
                await mysql
            ).query(query, [divide, plan, prefix, status]);
            if (newCalculateSection[0].affectedRows == 0) {
                return new HttpException(
                    500,
                    "Calculate Section insert failed"
                );
            }
            return { status: "success", message: "Calculate Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Calculate Section
    updateCalculateSection: async (id, data) => {
        const { divide, plan, prefix, status } = data;
        try {
            const query = `
            UPDATE calculate SET 
                divide = ?,plan = ?,prefix = ?,status = ?, 
            WHERE id = ?`;
            const updatedCalculateSection = await (
                await mysql
            ).query(query, [divide, plan, prefix, status, id]);

            if (updatedCalculateSection[0].affectedRows === 0) {
                return new HttpException(500, "Calculate Section not found");
            }
            return { status: "success", message: "Calculate Section updated" };
        } catch (err) {
            return new HttpException(500, "Calculate Section not found");
        }
    },

    // DELETE a Calculate Section item by ID
    deleteCalculateSection: async (id) => {
        try {
            const query = `DELETE FROM calculate WHERE id = ?`;
            const deletedCalculateSection = await (
                await mysql
            ).query(query, id);
            if (deletedCalculateSection[0].affectedRows === 0)
                return new HttpException(500, "Calculate Section not found");

            return { status: "success", message: "Calculate Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
