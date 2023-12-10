const { Router } = require("express");
const router = Router();
const controller = require("./pricing.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Pricing']
    console.log("/pricing");
    next();
});
//#swagger.tags = ['Pricing']
router.get("/", controller.getAllPricingSection);
router.post("/create", controller.createPricingSection);
router.post("/update/:id?", controller.updatePricingSection);
router.post("/delete/:id?", controller.deletePricingSection);

module.exports = router;
