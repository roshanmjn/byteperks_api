const { Router } = require("express");
const router = Router();
const {
    navigationController,
    heroController,
    trustedController,
    caseStudyController,
    blogsController,
} = require("../../controller");

const navService = require("../navigation/navigation.services.js");
const heroService = require("../hero/hero.services.js");
const trustedService = require("../trusted/trusted.services.js");
const caseStudyService = require("../casestudy/casestudy.services.js");
const blogsService = require("../blogs/blogs.services.js");

router.use("/", (req, res, next) => {
    console.log("/home");
    next();
});

const cb = async (req, res, next) => {
    const [navigation, hero, trusted, casestudy, blogs] = await Promise.all([
        navService.getAllNavigationItems(),
        heroService.getAllHeroByStatus(),
        trustedService.getAllTrustedSection(),
        caseStudyService.getAllCaseStudySection(),
        blogsService.getAllBlogsSection(),
    ]);
    res.json({ navigation, hero, trusted, casestudy, blogs });
};

router.get("/", cb);

router.post("/nav", navigationController.createNavigationItem);
router.put("/update/:id?", navigationController.updateNavigationItem);
router.post("/delete/:id?", navigationController.deleteNavigationItem);

module.exports = router;
