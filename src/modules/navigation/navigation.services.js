const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all navigation items
    getAllNavigationItems: async () => {
        try {
            const query = `SELECT
            t1.id,
            t1.name,
            t1.orders,
            t1.link,
            t1.status,
            CONCAT(
                '[',
                COALESCE(
                    GROUP_CONCAT(
                        JSON_OBJECT('id', t2.id, 'name', t2.submenu, 'link', t2.link, 'status', t2.status) SEPARATOR ', '
                    ),
                    ''
                ),
                ']'
            ) AS submenu
            FROM nav t1
            LEFT JOIN nav t2 ON t2.parent = t1.id AND t2.status = 'active'
            WHERE t1.parent = 0 AND t1.status = 'active'
            GROUP BY t1.id, t1.name, t1.orders, t1.link, t1.status
            ORDER BY t1.orders ASC;`;
            const [navigationItems, fields] = await (await mysql).query(query);

            return navigationItems;
        } catch (err) {
            console.log(err);
        }
    },

    // CREATE a new navigation item
    createNavigationItem: async (data) => {
        const { name, link, submenu, parent } = data;
        try {
            // QUERY TO GET THE TOTAL NUMBER OF UNIQUE ORDERS
            const query1 = `
            SELECT count(distinct orders) as orders_count
            FROM nav;
            `;
            const [result, field] = await (await mysql).query(query1);
            const orders_count = result[0]?.orders_count;

            const query2 = `
            INSERT INTO nav(name, link, orders, submenu, parent) VALUES (?, ?, ?, ?, ?)
            `;
            const newNavigationItem = await (
                await mysql
            ).query(query2, [name, link, orders_count, submenu, parent]);
            if (newNavigationItem[0].affectedRows == 0) {
                return new HttpException(500, "Navigation item insert failed");
            }
            return { status: "success", message: "Navigation item created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a navigation item by ID
    updateNavigationItem: async (id, data) => {
        const { name, link, submenu, parent } = data;
        try {
            const query = `UPDATE nav SET name=?,link=?,submenu=?,parent=? WHERE id = ?`;
            const updatedNavigationItem = await (
                await mysql
            ).query(query, [name, link, submenu, parent, id]);

            if (updatedNavigationItem[0].affectedRows === 0) {
                return new HttpException(500, "Navigation item not found");
            }
            return { status: "success", message: "Navigation item updated" };
        } catch (err) {
            return new HttpException(500, "Navigation item not found");
        }
    },

    // DELETE a navigation item by ID
    deleteNavigationItem: async (id) => {
        try {
            const query = `DELETE FROM nav WHERE id = ?`;
            const deletedNavigationItem = await (await mysql).query(query, id);
            if (deletedNavigationItem[0].affectedRows === 0)
                return new HttpException(500, "Navigation item not found");

            return { status: "success", message: "Navigation item deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
