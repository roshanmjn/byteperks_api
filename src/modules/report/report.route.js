const { Router } = require("express");
const router = Router();
const controller = require("./report.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Report']
    console.log("/report");
    next();
});

router.post("/", controller.createReport);

module.exports = router;
