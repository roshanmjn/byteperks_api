const { Router } = require("express");
const router = Router();
const controller = require("./calculate.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Calculate']
    console.log("/Calculate");
    next();
});
//#swagger.tags = ['Calculate']
router.get("/", controller.getAllCalculateSection);
router.post("/create", controller.createCalculateSection);
router.post("/update/:id?", controller.updateCalculateSection);
router.post("/delete/:id?", controller.deleteCalculateSection);

module.exports = router;
