const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors");

module.exports = {
    // GET all blogs Section
    getAllBlogsSection: async (data) => {
        // const { limit = 10, offset = 0, order = "desc" } = data;

        try {
            const query = `SELECT * FROM blogs`;
            const [blogsItem, fields] = await (await mysql).query(query);
            return blogsItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new blogs Section
    createBlogsSection: async (data) => {
        // uniqid,title,badge,content,image,readtime,views,category,tags,description,meta,status,date
        const {
            title,
            badge,
            content,
            image,
            readtime,
            views,
            category,
            tags,
            description,
            meta,
            date,
        } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `
            INSERT INTO blogs( uniqid,title,badge,content,image,readtime,views,category,tags,description,meta,date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
            `;
            const newBlogsSection = await (
                await mysql
            ).query(query, [
                uniqid,
                title,
                badge,
                content,
                image,
                readtime,
                views,
                category,
                tags,
                description,
                meta,
                date,
            ]);
            if (newBlogsSection[0].affectedRows == 0) {
                return new HttpException(500, "blogs Section insert failed");
            }
            return { status: "success", message: "blogs Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a blogs Section
    updateBlogsSection: async (id, data) => {
        const {
            title,
            badge,
            content,
            image,
            readtime,
            views,
            category,
            tags,
            description,
            meta,
            status,
            date,
        } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `UPDATE blogs SET 
            uniqid=?,
            title =?,
            badge =?,
            content =?,
            image =?,
            readtime =?,
            views =?,
            category =?,
            tags =?,
            description =?,
            meta =?,
            status =?,
            date =?,
            WHERE id = ?`;
            const updatedBlogsSection = await (
                await mysql
            ).query(query, [
                uniqid,
                title,
                badge,
                content,
                image,
                readtime,
                views,
                category,
                tags,
                description,
                meta,
                status,
                date,
                id,
            ]);

            if (updatedBlogsSection[0].affectedRows === 0) {
                return new HttpException(500, "blogs Section not found");
            }
            return { status: "success", message: "blogs Section updated" };
        } catch (err) {
            return new HttpException(500, "blogs Section not found");
        }
    },

    // DELETE a blogs Section item by ID
    deleteBlogsSection: async (id) => {
        try {
            const query = `DELETE FROM blogs WHERE id = ?`;
            const deletedBlogsSection = await (await mysql).query(query, id);
            if (deletedBlogsSection[0].affectedRows === 0)
                return new HttpException(500, "blogs Section not found");

            return { status: "success", message: "blogs Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
