const { Router } = require("express");
const router = Router();
const controller = require("./getstarted.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Get Started']
    console.log("/getstarted");
    next();
});

router.get("/", controller.getAllGetStartedData);
router.get("/:id?", controller.getGetStartedDataById);
router.post("/create", controller.createGetStartedData);
router.post("/send", controller.sendNewsLetter);
router.put("/update/:id", controller.updateGetStartedData);
router.delete("/delete/:id", controller.deleteGetStartedData);

module.exports = router;
