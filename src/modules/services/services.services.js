const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors/index.js");

module.exports = {
    // GET all Services Section
    getAllServicesSection: async () => {
        try {
            const query = `SELECT title, description, icon, content, uniqid,parent FROM services`;
            const [servicesItem, fields] = await (await mysql).query(query);
            return servicesItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new Services Section
    createServicesSection: async (data) => {
        const {
            title,
            description,
            status,
            icon,
            content,
            parent,
            submenu = false,
        } = data;
        const guid = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        const uniqid = title?.split(" ").join("-").toLowerCase() + "-" + guid();

        try {
            const query = `
            INSERT INTO services(title, description, status, icon, content, uniqid,parent ) VALUES (?, ?, ?, ?, ?, ?,?)
            `;
            const newServicesSection = await (
                await mysql
            ).query(query, [
                title,
                description,
                status,
                icon,
                content,
                uniqid,
                parent,
            ]);
            if (newServicesSection[0].affectedRows == 0) {
                return new HttpException(500, "Services Section insert failed");
            }

            if (submenu) {
                const [getParentId, fields] = await (await mysql)
                    .query(`SELECT id FROM nav WHERE name='Services';`)
                    .then((res) => res[0]);
                // console.log("getParentId", getParentId.id);
                const query2 = `
                    INSERT INTO submenu(title, description, status, icon, content, uniqid,parent ) VALUES (?, ?, ?, ?, ?, ?,?)
                    `;
                const newSubmenuSection = await (
                    await mysql
                ).query(query2, [
                    title,
                    description,
                    status,
                    icon,
                    content,
                    uniqid,
                    getParentId.id,
                ]);
                if (newSubmenuSection[0].affectedRows == 0) {
                    return new HttpException(
                        500,
                        "Services sub-menu Section insert failed"
                    );
                }
                return {
                    status: "success",
                    message: "Services & Submenu Section created",
                };
            }
            return { status: "success", message: "Services Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a Services Section
    updateServicesSection: async (id, data) => {
        const { title, description, status, icon, content, parent } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `UPDATE services SET title=?,description=?,status=?,icon=?,content=?,uniqid=?,parent=? WHERE id = ?`;
            const updatedServicesSection = await (
                await mysql
            ).query(query, [
                title,
                description,
                status,
                icon,
                content,
                uniqid,
                parent,
                id,
            ]);

            if (updatedServicesSection[0].affectedRows === 0) {
                return new HttpException(500, "Services Section not found");
            }
            return { status: "success", message: "Services Section updated" };
        } catch (err) {
            return new HttpException(500, "Services Section not found");
        }
    },

    // DELETE a Services Section item by ID
    deleteServicesSection: async (id) => {
        try {
            const query = `DELETE FROM services WHERE id = ?`;
            const deletedServicesSection = await (await mysql).query(query, id);
            if (deletedServicesSection[0].affectedRows === 0)
                return new HttpException(500, "Services Section not found");

            return { status: "success", message: "Services Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
