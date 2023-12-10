const pricingService = require("./pricing.services.js");

// GET all Pricing sections
const getAllPricingSection = async (req, res, next) => {
    try {
        const getPricingSection = await pricingService.getAllPricingSection();
        res.json(getPricingSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new Pricing section
const createPricingSection = async (req, res, next) => {
    try {
        const newPricingSection = await pricingService.createPricingSection(
            req.body
        );
        res.status(201).json(newPricingSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a Pricing section by ID
const updatePricingSection = async (req, res, next) => {
    try {
        const updatedPricingSection = await pricingService.updatePricingSection(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedPricingSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a Pricing section by ID
const deletePricingSection = async (req, res, next) => {
    try {
        const deletePricingSection = await pricingService.deletePricingSection(
            req.params.id
        );
        res.status(200).json(deletePricingSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllPricingSection,
    createPricingSection,
    updatePricingSection,
    deletePricingSection,
};
