const { Router } = require("express");
const router = Router();
const controller = require("./casestudy.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Casestudy']
    console.log("/casestudy");
    next();
});
//#swagger.tags = ['Casestudy']
router.get("/", controller.getAllCaseStudySection);
router.get("/:uniqid?", controller.getCaseStudyById);
router.post("/create", controller.createCaseStudySection);
router.post("/update/:id?", controller.updateCaseStudySection);
router.post("/delete/:id?", controller.deleteCaseStudySection);

module.exports = router;
