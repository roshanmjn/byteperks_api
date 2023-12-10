const { Router } = require("express");
const router = Router();
const controller = require("./navigation.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Navigation']
    console.log("/nav");
    next();
});

router.get("/", controller.getAllNavigationItems);
router.post("/create", controller.createNavigationItem);
router.post("/update/:id?", controller.updateNavigationItem);
router.post("/delete/:id?", controller.deleteNavigationItem);

module.exports = router;
