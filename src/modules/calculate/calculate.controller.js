const calculateService = require("./calculate.services.js");

// GET all Calculate sections
const getAllCalculateSection = async (req, res, next) => {
    try {
        const getCalculateSection =
            await calculateService.getAllCalculateSection();
        res.json(getCalculateSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new Calculate section
const createCalculateSection = async (req, res, next) => {
    try {
        const newCalculateSection =
            await calculateService.createCalculateSection(req.body);
        res.status(201).json(newCalculateSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a Calculate section by ID
const updateCalculateSection = async (req, res, next) => {
    try {
        const updatedCalculateSection =
            await calculateService.updateCalculateSection(
                req.params.id,
                req.body
            );
        res.status(200).json(updatedCalculateSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a Calculate section by ID
const deleteCalculateSection = async (req, res, next) => {
    try {
        const deleteCalculateSection =
            await calculateService.deleteCalculateSection(req.params.id);
        res.status(200).json(deleteCalculateSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllCalculateSection,
    createCalculateSection,
    updateCalculateSection,
    deleteCalculateSection,
};
