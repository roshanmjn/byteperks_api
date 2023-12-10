const { Router } = require("express");
const router = Router();
const controller = require("./social.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Social']
    console.log("/social");
    next();
});

router.get("/", controller.getAllSocialSection);
router.post("/create", controller.createSocialSection);
router.post("/update/:id?", controller.updateSocialSection);
router.post("/delete/:id?", controller.deleteSocialSection);

module.exports = router;
