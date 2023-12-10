const NavigationService = require("./navigation.services.js");

// GET all navigation items
const getAllNavigationItems = async (req, res, next) => {
    try {
        const navigationItems = await NavigationService.getAllNavigationItems();
        res.json(navigationItems);
    } catch (err) {
        next(err);
    }
};

// GET a single navigation item by ID
const getNavigationItemById = async (req, res, next) => {
    try {
        const navigationItem = await NavigationService.getNavigationItemById(
            req.params.id
        );
        res.status(200).json(navigationItem);
    } catch (err) {
        next(err);
    }
};

// CREATE a new navigation item
const createNavigationItem = async (req, res, next) => {
    const { name, link, submenu, parent } = req.body;
    try {
        const newNavigationItem = await NavigationService.createNavigationItem({
            name,
            link,
            submenu,
            parent,
        });
        res.status(201).json(newNavigationItem);
    } catch (err) {
        next(err);
    }
};

// UPDATE a navigation item by ID
const updateNavigationItem = async (req, res, next) => {
    try {
        const updatedNavigationItem =
            await NavigationService.updateNavigationItem(
                req.params.id,

                req.body
            );
        res.status(200).json(updatedNavigationItem);
    } catch (err) {
        next(err);
    }
};

// DELETE a navigation item by ID
const deleteNavigationItem = async (req, res, next) => {
    try {
        const deleteNavigationItem =
            await NavigationService.deleteNavigationItem(req.params.id);
        res.status(200).json(deleteNavigationItem);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAllNavigationItems,
    getNavigationItemById,
    createNavigationItem,
    updateNavigationItem,
    deleteNavigationItem,
};
