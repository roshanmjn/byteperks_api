const TrustedService = require("./trusted.services.js");

// GET all Trusted sections
const getAllTrustedSection = async (req, res, next) => {
    try {
        const getTrustedSection = await TrustedService.getAllTrustedSection();
        res.json(getTrustedSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new Trusted section
const createTrustedSection = async (req, res, next) => {
    try {
        const newTrustedSection = await TrustedService.createTrustedSection(
            req.body
        );
        res.status(201).json(newTrustedSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a Trusted section by ID
const updateTrustedSection = async (req, res, next) => {
    try {
        const updatedTrustedSection = await TrustedService.updateTrustedSection(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedTrustedSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a Trusted section by ID
const deleteTrustedSection = async (req, res, next) => {
    try {
        const deleteTrustedSection = await TrustedService.deleteTrustedSection(
            req.params.id
        );
        res.status(200).json(deleteTrustedSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllTrustedSection,
    createTrustedSection,
    updateTrustedSection,
    deleteTrustedSection,
};
