const { Router } = require("express");
const router = Router();
const controller = require("./features.controller.js");

router.use("/", (req, res, next) => {
    console.log("/features");
    next();
});

router.get("/", controller.getAllFeatureSection);
router.post("/create", controller.createFeatureSection);
router.post("/update/:id?", controller.updateFeatureSection);
router.post("/delete/:id?", controller.deleteFeatureSection);

module.exports = router;
