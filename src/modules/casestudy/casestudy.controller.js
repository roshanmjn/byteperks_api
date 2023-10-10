const CaseStudyService = require("./casestudy.services.js");

// GET all CaseStudy sections
const getAllCaseStudySection = async (req, res, next) => {
    try {
        const getCaseStudySection =
            await CaseStudyService.getAllCaseStudySection();
        res.json(getCaseStudySection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new CaseStudy section
const createCaseStudySection = async (req, res, next) => {
    try {
        const newCaseStudySection =
            await CaseStudyService.createCaseStudySection(req.body);
        res.status(201).json(newCaseStudySection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a CaseStudy section by ID
const updateCaseStudySection = async (req, res, next) => {
    try {
        const updatedCaseStudySection =
            await CaseStudyService.updateCaseStudySection(
                req.params.id,
                req.body
            );
        res.status(200).json(updatedCaseStudySection);
    } catch (err) {
        next(err);
    }
};

// DELETE a CaseStudy section by ID
const deleteCaseStudySection = async (req, res, next) => {
    try {
        const deleteCaseStudySection =
            await CaseStudyService.deleteCaseStudySection(req.params.id);
        res.status(200).json(deleteCaseStudySection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllCaseStudySection,
    createCaseStudySection,
    updateCaseStudySection,
    deleteCaseStudySection,
};
