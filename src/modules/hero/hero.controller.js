const HeroService = require("./hero.services.js");

// GET all hero sections
const getAllHeroByStatus = async (req, res, next) => {
    try {
        const getHeroSection = await HeroService.getAllHeroByStatus();
        res.json(getHeroSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new hero section
const createHeroSection = async (req, res, next) => {
    try {
        const newHeroSection = await HeroService.createHeroSection(req.body);
        res.status(201).json(newHeroSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a hero section by ID
const updateHeroSection = async (req, res, next) => {
    try {
        const updatedHeroSection = await HeroService.updateHeroSection(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedHeroSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a hero section by ID
const deleteHeroSection = async (req, res, next) => {
    try {
        const deleteHeroSection = await HeroService.deleteHeroSection(
            req.params.id
        );
        res.status(200).json(deleteHeroSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllHeroByStatus,
    createHeroSection,
    updateHeroSection,
    deleteHeroSection,
};
