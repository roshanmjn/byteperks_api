const { mysql } = require("../../database/connection.js");
const { HttpException, NotFound } = require("../../errors");

module.exports = {
    // GET all blogs Section
    getAllBlogsSection: async (data) => {
        const limit = data?.limit ? data?.limit : 6;
        const offset = data?.offset ? data?.offset : 0;
        const order = data?.order ? data?.order : "asc";
        try {
            const query = `SELECT * FROM blogs order by id ${order} limit ? offset ? ;`;
            const [blogsItem, fields] = await (
                await mysql
            ).query(query, [Number(limit), Number(offset)]);
            return blogsItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // GET blogs by uniqid/code
    getBlogsByUniqid: async (data) => {
        const { uniqid } = data;
        try {
            const query = `SELECT * FROM blogs WHERE uniqid = ? ;`;
            const [blogsItem, fields] = await (
                await mysql
            ).query(query, [uniqid]);
            if (blogsItem.length === 0) {
                return new NotFound("Blog not available!");
            }
            return blogsItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new blogs Section
    createBlogsSection: async (data) => {
        const {
            title,
            badge,
            content,
            image,
            readtime,
            views,
            category,
            type,
            tags,
            description,
            meta,
            date,
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
                INSERT INTO blogs( uniqid,title,badge,content,image,readtime,views,category,type,tags,description,meta,date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
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
                type,
                tags,
                description,
                meta,
                date,
            ]);
            if (newBlogsSection[0].affectedRows == 0) {
                return new HttpException(500, "blogs Section insert failed");
            }
            //// ******************************************/
            //// CREATE SUB-MENU IF PARAMETER [submenu = true]
            // ******************************************/
            if (submenu) {
                const [getParentId, fields] = await (await mysql)
                    .query(`SELECT id FROM nav WHERE name='Blogs';`)
                    .then((res) => res[0]);
                console.log("getParentId", getParentId.id);
                const query3 = `
                INSERT INTO submenu(title, description,  icon, content, uniqid,parent ) VALUES (?, ?, ?, ?, ?,?)
                `;
                const newSubmenuSection = await (
                    await mysql
                ).query(query3, [
                    title,
                    description,
                    image,
                    content,
                    uniqid,
                    getParentId.id,
                ]);
                if (newSubmenuSection[0].affectedRows == 0) {
                    return new HttpException(
                        500,
                        "Blog submenu Section insert failed"
                    );
                }
                return {
                    status: "success",
                    message: "Blog & Submenu Section created",
                };
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
            type,
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
            type=?,
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
                type,
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
