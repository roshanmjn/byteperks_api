const servicesService = require("./services.services.js");

// GET all Services Sections
const getAllServiceSection = async (req, res, next) => {
    try {
        const getServiceSection = await servicesService.getAllServicesSection();
        res.json(getServiceSection);
    } catch (err) {
        next(err);
    }
};

// CREATE a new Services Section
const createServiceSection = async (req, res, next) => {
    const {
        title,
        description,
        status,
        icon,
        content,
        parent,
        submenu = false,
    } = req.body;
    try {
        const newServiceSection = await servicesService.createServicesSection({
            title,
            description,
            status,
            icon,
            content,
            parent,
            submenu,
        });
        res.status(201).json(newServiceSection);
    } catch (err) {
        next(err);
    }
};

// UPDATE a Services Section by ID
const updateServiceSection = async (req, res, next) => {
    try {
        const updatedServiceSection =
            await servicesService.updateServicesSection(
                req.params.id,
                req.body
            );
        res.status(200).json(updatedServiceSection);
    } catch (err) {
        next(err);
    }
};

// DELETE a Services Section by ID
const deleteServiceSection = async (req, res, next) => {
    try {
        const deleteServiceSection =
            await servicesService.deleteServicesSection(req.params.id);
        res.status(200).json(deleteServiceSection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllServiceSection,
    createServiceSection,
    updateServiceSection,
    deleteServiceSection,
};
