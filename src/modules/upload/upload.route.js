const { Router } = require("express");
const router = Router();
const controller = require("./upload.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['File Upload']
    console.log("/upload");
    next();
});
//#swagger.tags = ['File Upload']
router.post("/", controller.upload);

module.exports = router;
