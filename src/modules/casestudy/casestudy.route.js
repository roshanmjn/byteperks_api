const { Router } = require("express");
const router = Router();
const controller = require("./casestudy.controller.js");

router.use("/", (req, res, next) => {
    console.log("/casestudy");
    next();
});

router.get("/", controller.getAllCaseStudySection);
router.post("/create", controller.createCaseStudySection);
router.post("/update/:id?", controller.updateCaseStudySection);
router.post("/delete/:id?", controller.deleteCaseStudySection);

module.exports = router;
