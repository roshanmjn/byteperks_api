const { Router } = require("express");
const router = Router();
const controller = require("./services.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Services']
    console.log("/services");
    next();
});

router.get("/", controller.getAllServiceSection);
router.post("/create", controller.createServiceSection);
router.post("/update/:id?", controller.updateServiceSection);
router.post("/delete/:id?", controller.deleteServiceSection);

module.exports = router;
