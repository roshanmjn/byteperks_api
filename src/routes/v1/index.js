const { Router } = require("express");
const router = Router();
// const {
//     config,
//     nav,
//     hero,
//     trusted,
//     caseStudy,
//     blogs,
//     features,
//     social,
// } = require("../../modules");

const nav = require("../../modules/navigation/navigation.route.js");
const config = require("../../modules/config/index.js");
const hero = require("../../modules/hero/hero.route.js");
const trusted = require("../../modules/trusted/trusted.route.js");
const casestudy = require("../../modules/casestudy/casestudy.route.js");
const blogs = require("../../modules/blogs/blogs.route.js");
const features = require("../../modules/features/features.route.js");
const social = require("../../modules/social/social.route.js");
const pricing = require("../../modules/pricing/pricing.route.js");
const calculate = require("../../modules/calculate/calculate.route.js");
const services = require("../../modules/services/services.route.js");
const getstarted = require("../../modules/getstarted/getstarted.route.js");
const contact = require("../../modules/contact/contact.route.js");
const upload = require("../../modules/upload/upload.route.js");
const report = require("../../modules/report/report.route.js");

router.use("/", (req, res, next) => {
    console.log("/v1");
    next();
});

router.use("/config", config);
router.use("/nav", nav);
router.use("/hero", hero);
router.use("/trusted", trusted);
router.use("/casestudy", casestudy);
router.use("/blogs", blogs);
router.use("/features", features);
router.use("/social", social);
router.use("/pricing", pricing);
router.use("/calculate", calculate);
router.use("/services", services);
router.use("/services", services);
router.use("/getstarted", getstarted);
router.use("/contact", contact);
router.use("/upload", upload);
router.use("/report", report);

module.exports = router;
