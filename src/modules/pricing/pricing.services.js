const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all Pricing Section
    getAllPricingSection: async () => {
        try {
            const query = `SELECT * FROM pricing;`;
            const [pricingItem, fields] = await (await mysql).query(query);
            return pricingItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    // CREATE a new Pricing Section
    createPricingSection: async (data) => {
        const { name, price, discount, discountTitle, initial } = data;
        try {
            const query = `
            INSERT INTO pricing(name,price,discount,discountTitle,initial) VALUES (?,?,?,?,?)
            `;
            const newPricingSection = await (
                await mysql
            ).query(query, [name, price, discount, discountTitle, initial]);
            if (newPricingSection[0].affectedRows == 0) {
                return new HttpException(500, "Pricing Section insert failed");
            }
            return { status: "success", message: "Pricing Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Pricing Section
    updatePricingSection: async (id, data) => {
        const { name, price, discount, discountTitle, initial, status } = data;
        try {
            const query = `
            UPDATE pricing SET 
                name=?,price=?,discount=?,discountTitle=?,initial=?,status=?, 
            WHERE id = ?`;
            const updatedPricingSection = await (
                await mysql
            ).query(query, [
                name,
                price,
                discount,
                discountTitle,
                initial,
                status,
                id,
            ]);

            if (updatedPricingSection[0].affectedRows === 0) {
                return new HttpException(500, "Pricing Section not found");
            }
            return { status: "success", message: "Pricing Section updated" };
        } catch (err) {
            return new HttpException(500, "Pricing Section not found");
        }
    },

    // DELETE a Pricing Section item by ID
    deletePricingSection: async (id) => {
        try {
            const query = `DELETE FROM pricing WHERE id = ?`;
            const deletedPricingSection = await (await mysql).query(query, id);
            if (deletedPricingSection[0].affectedRows === 0)
                return new HttpException(500, "Pricing Section not found");

            return { status: "success", message: "Pricing Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
