const { Router } = require("express");
const router = Router();
const controller = require("./trusted.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Trusted']
    console.log("/trusted");
    next();
});
//#swagger.tags = ['Trusted']
router.get("/", controller.getAllTrustedSection);
router.post("/create", controller.createTrustedSection);
router.post("/update/:id?", controller.updateTrustedSection);
router.post("/delete/:id?", controller.deleteTrustedSection);

module.exports = router;
