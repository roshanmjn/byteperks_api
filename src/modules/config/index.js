const { Router } = require("express");
const router = Router();

const navService = require("../navigation/navigation.services.js");
const heroService = require("../hero/hero.services.js");
const trustedService = require("../trusted/trusted.services.js");
const caseStudyService = require("../casestudy/casestudy.services.js");
const blogsService = require("../blogs/blogs.services.js");
const socialService = require("../social/social.services.js");
const featuredService = require("../features/features.services.js");
const pricingService = require("../pricing/pricing.services.js");
const calculateService = require("../calculate/calculate.services.js");
const servicesService = require("../services/services.services.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Config']
    console.log("/home");
    next();
});

const title = "Byte Perks";
const description =
    "Byte Perks. offers top-notch IT solutions including website development, mobile apps, Discord bot development, software solutions, and graphic design. Our team of experts transforms your digital vision into reality. Contact us for comprehensive IT services to boost your online presence and productivity. ";
const keywords =
    "Byte Perks, IT Solutions, Website Development Services, Mobile App Development, Discord Bot Development, Software Solutions, Graphic Design Services, Technology Consultation, Custom Web Applications, E-commerce Website Development, Mobile App Design, SEO Optimization, Responsive Web Design, User-Friendly Websites, Digital Transformation, Technology Experts, Creative Graphic Design, App Development Agency, Web Development Company, Discord Bot Creators, Custom Software Development, Byte , Perks , BytePerks, BytePerks.com, BytePerks Nepal, BytePerks Nepal Pvt. Ltd., BytePerks Nepal Private Limited, byteperks.com , byteperks, byteperk , it company , it company in nepal, it company in kathmandu, it company in kathmandu nepal, best it company in nepal, best it company in kathmandu, cheap , cheap it company in nepal, cheap it company in kathmandu, cheap it company in kathmandu nepal, cheap website, cheap website in nepal, cheap apps , cheap apps in nepal, cheap softwere , cheap softwere in nepal";
const favicon = "https://cdn.byteperks.com/assets/img/favicon.png";
const email = "support@byteperks.com";
const logo = "https://cdn.byteperks.com/assets/img/full-logo.png";
const version = "1.0.0";

const cb = async (req, res, next) => {
    const [
        navigation,
        hero,
        trusted,
        casestudy,
        blogs,
        features,
        social,
        pricing,
        calculate,
        services,
    ] = await Promise.all([
        navService.getAllNavigationItems(),
        heroService.getAllHeroByStatus(),
        trustedService.getAllTrustedSection(),
        caseStudyService.getAllCaseStudySection(),
        blogsService.getAllBlogsSection(),
        featuredService.getAllFeaturesSection(),
        socialService.getAllSocialItems(),
        pricingService.getAllPricingSection(),
        calculateService.getAllCalculateSection(),
        servicesService.getAllServicesSection(),
    ]);
    res.json({
        title,
        description,
        keywords,
        favicon,
        email,
        logo,
        version,
        navigation,
        hero,
        trusted,
        casestudy,
        blogs,
        features,
        social,
        pricing,
        calculate,
        services,
    });
};

router.get("/", cb);

module.exports = router;
