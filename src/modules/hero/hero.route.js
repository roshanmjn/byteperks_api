const { Router } = require("express");
const router = Router();
const controller = require("./hero.controller.js");

router.use("/", (req, res, next) => {
    console.log("/hero");
    next();
});

router.get("/", controller.getAllHeroByStatus);
router.post("/create", controller.createHeroSection);
router.post("/update/:id?", controller.updateHeroSection);
router.post("/delete/:id?", controller.deleteHeroSection);

module.exports = router;
