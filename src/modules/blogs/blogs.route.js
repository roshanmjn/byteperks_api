const { Router } = require("express");
const router = Router();
const controller = require("./blogs.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Blogs']
    console.log("/blogs");
    next();
});
//#swagger.tags = ['Blogs']
router.get("/", controller.getAllBlogsection);
router.get("/:uniqid?", controller.getBlogsByUniqid);
router.post("/create", controller.createBlogsection);
router.post("/update/:id?", controller.updateBlogsection);
router.post("/delete/:id?", controller.deleteBlogsection);

module.exports = router;
