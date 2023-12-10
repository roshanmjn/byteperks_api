const { Router } = require("express");
const router = Router();
const controller = require("./contact.controller.js");

router.use("/", (req, res, next) => {
    //#swagger.tags = ['Contact Us']
    console.log("/contact");
    next();
});

router.get("/", controller.getAllContactData);
router.get("/:id?", controller.getContactById);
router.post("/create", controller.createContactData);
router.put("/update/:id", controller.updateContactData);
router.delete("/delete/:id", controller.deleteContactData);

module.exports = router;
