"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
    INSERT INTO submenu (title, description, status, icon, content, uniqid,parent) VALUES
    ('Website', 'Ecommerce , Blog , Portfolio , Landing Pages', 'active','https://cdn.byteperks.com/assets/img/web.svg', 'We design and develop websites that are not only visually beautiful but also functionally effective. Our team of web strategists, designers, developers, and project managers work together to help clients meet their business objectives.','website',5),
    ('Mobile App', 'Android , IOS , React Native', 'active','https://cdn.byteperks.com/assets/img/app.svg','We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.','mobile-app',5),
    ('Graphic Design', 'Logo, Banners , Posters, Flyers', 'active','https://cdn.byteperks.com/assets/img/design.svg','There''s no limit to what you can get designed at BytePerks. Whether you''re looking for a spectacular new logo or some stunning flyers, the talented global community of designers at BytePerks can make it happen. BytePerks prides itself on it''s high quality designers who deliver only the best graphic design services. Find the right design service for you below and get design you''ll love today!','graphic-design',5),
    ('Software', 'Windows, Linux, Mac, Flyers', 'active','https://cdn.byteperks.com/assets/img/softwere.svg','We help companies launch their projects, adopt advanced technologies, switch to digital-first strategies, and grow their businesses.','software',5),
    ('Browser Extension', 'Chrome , Firefox , Edge', 'active','https://cdn.byteperks.com/assets/img/ext.svg','Custom browser extension services at your arrival.','browser-extension',5),
    ('Discord Bot', 'Custom Bot , Music Bot , Moderation Bot', 'active','https://cdn.byteperks.com/assets/img/discord.svg','We believe that the best Discord bots are explicitly tailored to each client’s needs, so we take the time to understand your business and your requirements before starting development. This ensures that our Discord bots are always fit for purpose and provide the maximum value possible. Get in touch with us today to discuss your Discord bot development needs; we’d be happy to help.','discord-bot',5);
`);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE submenu");
    },
};
