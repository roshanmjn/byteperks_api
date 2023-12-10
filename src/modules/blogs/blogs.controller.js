const blogService = require("./blogs.services.js");

// GET all blogs sections
const getAllBlogsection = async (req, res, next) => {
    try {
        const getblogsection = await blogService.getAllBlogsSection(req.query);
        res.json(getblogsection);
    } catch (err) {
        next(err);
    }
};

// GET blogs by uniqid/code
const getBlogsByUniqid = async (req, res, next) => {
    console.log(req.params);
    try {
        const getblogs = await blogService.getBlogsByUniqid(req.params);
        res.json(getblogs);
    } catch (err) {
        next(err);
    }
};

// CREATE a new blogs section
const createBlogsection = async (req, res, next) => {
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
    } = req.body;
    try {
        const newblogsection = await blogService.createBlogsSection(req.body);
        res.status(201).json(newblogsection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a blogs section by ID
const updateBlogsection = async (req, res, next) => {
    try {
        const updatedblogsection = await blogService.updateBlogsSection(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedblogsection);
    } catch (err) {
        next(err);
    }
};

// DELETE a blogs section by ID
const deleteBlogsection = async (req, res, next) => {
    try {
        const deleteblogsection = await blogService.deleteBlogsSection(
            req.params.id
        );
        res.status(200).json(deleteblogsection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllBlogsection,
    getBlogsByUniqid,
    createBlogsection,
    updateBlogsection,
    deleteBlogsection,
};
