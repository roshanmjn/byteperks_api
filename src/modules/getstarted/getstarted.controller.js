const GetStartedService = require("./getstarted.services.js");

// GET all GetStarted data
const getAllGetStartedData = async (req, res, next) => {
    try {
        const GetStartedData =
            await GetStartedService.getAllGetStartedSection();
        res.json(GetStartedData);
    } catch (err) {
        next(err);
    }
};

// GET a single GetStarted data by ID
const getGetStartedDataById = async (req, res, next) => {
    //CHECK IF ID IS A DIGIT [0-9] FIRST
    //AND RETURN ERROR IF ID IS NOT A DIGIT
    if (!/^\d+$/.test(req.params.id)) {
        return res.status(400).json({ status: "error", message: "Invalid ID" });
    }
    try {
        const GetStartedData = await GetStartedService.getAllGetStartedById(
            req.params.id
        );
        res.status(200).json(GetStartedData);
    } catch (err) {
        next(err);
    }
};

// CREATE a new GetStarted Data
const createGetStartedData = async (req, res, next) => {
    try {
        const newGetStartedData =
            await GetStartedService.createGetStartedSection(req.body);
        res.status(201).json(newGetStartedData);
    } catch (err) {
        next(err);
    }
};
// SEND a new GetStarted Data
const sendNewsLetter = async (req, res, next) => {
    const { email, message, subjects } = req.body;
    try {
        const data = await GetStartedService.sendNewsLetter({
            email,
            message,
            subjects,
        });
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
};

// UPDATE a GetStarted Data by ID
const updateGetStartedData = async (req, res, next) => {
    try {
        const updatedGetStartedData =
            await GetStartedService.updateGetStartedSection(
                req.params.id,

                req.body
            );
        res.status(200).json(updatedGetStartedData);
    } catch (err) {
        next(err);
    }
};

// DELETE a GetStarted Data by ID
const deleteGetStartedData = async (req, res, next) => {
    try {
        const deleteGetStartedData =
            await GetStartedService.deleteGetStartedSection(req.params.id);
        res.status(200).json(deleteGetStartedData);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllGetStartedData,
    getGetStartedDataById,
    createGetStartedData,
    updateGetStartedData,
    deleteGetStartedData,
    sendNewsLetter,
};
