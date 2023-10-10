const { Router } = require("express");
const router = Router();
const controller = require("./blogs.controller.js");

router.use("/", (req, res, next) => {
    console.log("/blogs");
    next();
});

router.get("/", controller.getAllBlogsection);
router.post("/create", controller.createBlogsection);
router.post("/update/:id?", controller.updateBlogsection);
router.post("/delete/:id?", controller.deleteBlogsection);

module.exports = router;
