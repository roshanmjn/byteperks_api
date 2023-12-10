const { mysql } = require("../../database/connection.js");
const { HttpException } = require("../../errors");

module.exports = {
    // GET all CaseStudy Section
    getAllCaseStudySection: async () => {
        try {
            const query = `SELECT 
                           company,description,content,
                           featured,icon,image,
                           location,logo,status,
                           title,website,technology,uniqid
                           FROM casestudy WHERE status='active'`;
            const [CaseStudyItem, fields] = await (await mysql).query(query);
            return CaseStudyItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    // GET CaseStudy by id
    getCaseStudyById: async (data) => {
        const { uniqid } = data;
        try {
            const query = `SELECT 
                           company,description,content,
                           featured,icon,image, 
                           location,logo,status,
                           title,website,technology,uniqid
                           FROM casestudy WHERE uniqid = ?`;
            const [CaseStudyItem, fields] = await (
                await mysql
            ).query(query, uniqid);
            console.log(CaseStudyItem);
            return CaseStudyItem;
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // CREATE a new CaseStudy Section
    createCaseStudySection: async (data) => {
        const {
            company,
            description,
            content,
            featured,
            icon,
            image,
            location,
            logo,
            status,
            title,
            website,
            technology,
        } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `
            INSERT INTO casestudy(company,description,content,featured,icon,image,location,logo,status,title,website,technology,uniqid ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);
            `;
            const newCaseStudySection = await (
                await mysql
            ).query(query, [
                company,
                description,
                content,
                featured,
                icon,
                image,
                location,
                logo,
                status,
                title,
                website,
                technology,
                uniqid,
            ]);
            if (newCaseStudySection[0].affectedRows == 0) {
                return new HttpException(
                    500,
                    "Case Study Section insert failed"
                );
            }
            return { status: "success", message: "Case Study Section created" };
        } catch (err) {
            throw new Error(err.message);
        }
    },

    // UPDATE a CaseStudy Section
    updateCaseStudySection: async (id, data) => {
        const {
            company,
            description,
            content,
            featured,
            icon,
            image,
            location,
            logo,
            status,
            title,
            website,
            technology,
        } = data;
        const uniqid = title?.split(" ").join("-").toLowerCase();
        try {
            const query = `
            UPDATE casestudy SET
            company=?,description=?,content=?,featured=?,icon=?,image=?,location=?,logo=?,status=?,title=?,website=?,technology=?,uniqid=?
            WHERE id=?,
            `;
            const updatedCaseStudySection = await (
                await mysql
            ).query(query, [
                company,
                description,
                content,
                featured,
                icon,
                image,
                location,
                logo,
                status,
                title,
                website,
                technology,
                uniqid,
                id,
            ]);

            if (updatedCaseStudySection[0].affectedRows === 0) {
                return new HttpException(500, "CaseStudy Section not found");
            }
            return { status: "success", message: "Case Study Section updated" };
        } catch (err) {
            return new HttpException(500, "Case Study Section not found");
        }
    },

    // DELETE a CaseStudy Section item by ID
    deleteCaseStudySection: async (id) => {
        try {
            const query = `DELETE FROM casestudy WHERE id = ?`;
            const deletedCaseStudySection = await (
                await mysql
            ).query(query, id);
            if (deletedCaseStudySection[0].affectedRows === 0)
                return new HttpException(500, "Case Study Section not found");

            return { status: "success", message: "Case Study Section deleted" };
        } catch (err) {
            throw new Error(err.message);
        }
    },
};
