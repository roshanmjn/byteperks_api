const FeatureService = require("./features.services.js");

// GET all features sections
const getAllFeatureSection = async (req, res, next) => {
    try {
        const getFeatureSection = await FeatureService.getAllFeaturesSection();
        res.json(getFeatureSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new features section
const createFeatureSection = async (req, res, next) => {
    try {
        const newFeatureSection = await FeatureService.createFeaturesSection(
            req.body
        );
        res.status(201).json(newFeatureSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a features section by ID
const updateFeatureSection = async (req, res, next) => {
    try {
        const updatedFeatureSection =
            await FeatureService.updateFeaturesSection(req.params.id, req.body);
        res.status(200).json(updatedFeatureSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a features section by ID
const deleteFeatureSection = async (req, res, next) => {
    try {
        const deleteFeatureSection = await FeatureService.deleteFeaturesSection(
            req.params.id
        );
        res.status(200).json(deleteFeatureSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllFeatureSection,
    createFeatureSection,
    updateFeatureSection,
    deleteFeatureSection,
};
