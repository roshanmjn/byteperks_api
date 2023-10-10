const SocialService = require("./social.services.js");

// GET all social sections
const getAllSocialSection = async (req, res, next) => {
    try {
        const getSocialSection = await SocialService.getAllSocialItems();
        res.json(getSocialSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new social section
const createSocialSection = async (req, res, next) => {
    try {
        const newSocialSection = await SocialService.createSocialSection(
            req.body
        );
        res.status(201).json(newSocialSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a social section by ID
const updateSocialSection = async (req, res, next) => {
    try {
        const updatedSocialSection = await SocialService.updateSocialSection(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedSocialSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a social section by ID
const deleteSocialSection = async (req, res, next) => {
    try {
        const deleteSocialSection = await SocialService.deleteSocialSection(
            req.params.id
        );
        res.status(200).json(deleteSocialSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllSocialSection,
    createSocialSection,
    updateSocialSection,
    deleteSocialSection,
};
