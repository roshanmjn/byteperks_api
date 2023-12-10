const contactService = require("./contact.services.js");

// GET all Contact Datas
const getAllContactData = async (req, res, next) => {
    try {
        const getContactData = await contactService.getAllContactData();
        res.json(getContactData);
    } catch (err) {
        next(err);
    }
};

// GET Contact Data by [id]
const getContactById = async (req, res, next) => {
    try {
        const getContactData = await contactService.getContactById(
            req.params.id
        );
        res.json(getContactData);
    } catch (err) {
        next(err);
    }
};

// CREATE a new Contact Data
const createContactData = async (req, res, next) => {
    try {
        const newContactData = await contactService.createContactData(req.body);
        res.status(201).json(newContactData);
    } catch (err) {
        next(err);
    }
};

// UPDATE a Contact Data by ID
const updateContactData = async (req, res, next) => {
    try {
        const updatedContactData = await contactService.updateContactData(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedContactData);
    } catch (err) {
        next(err);
    }
};

// DELETE a Contact Data by ID
const deleteContactData = async (req, res, next) => {
    try {
        const deleteContactData = await contactService.deleteContactData(
            req.params.id
        );
        res.status(200).json(deleteContactData);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllContactData,
    getContactById,
    createContactData,
    updateContactData,
    deleteContactData,
};
