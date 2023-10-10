const { Router } = require("express");
const router = Router();
const {
    config,
    nav,
    hero,
    trusted,
    caseStudy,
    blogs,
    features,
    social,
} = require("../../modules");

router.use("/", (req, res, next) => {
    console.log("/v1");
    next();
});

router.use("/config", config);
router.use("/nav", nav);
router.use("/hero", hero);
router.use("/trusted", trusted);
router.use("/casestudy", caseStudy);
router.use("/blogs", blogs);
router.use("/features", features);
router.use("/social", social);

module.exports = router;
