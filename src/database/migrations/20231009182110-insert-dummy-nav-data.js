"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
            INSERT INTO nav (name, orders, link, status, submenu, parent) VALUES
        ('Get a quote for repairs', 5, 'getquote', 'active', '', 0),
        ('Blogs', 4, 'blog', 'active', '', 0),
        ('Offers', 3, 'offers/abcdef', 'inactive', '', 0),
        ('What we do', 2, 'about', 'active', '', 0),
        ('Locations', 1, 'shop', 'active', '', 0),
        ('Locations', 5, 'shop/gadgetgeekswilletton', 'active', 'Gadgets Geek Willetton', 5),
        ('Locations', 5, 'shop/expressmobilerepairs', 'active', 'Express Mobile Repairs', 5),
        ('Locations', 5, 'shop/gadgetgeeksrockingham', 'active', 'Gadgets Geek Rockingham', 5),
        ( 'Home', 0, '', 'active', '', 0),
        ( 'Location', 5, 'shop/gadgetgeekslakelands', 'active', 'Gadgets Geek Lakelands', 5),
        ('Shop', 5, 'shop/testlocation4s6tnbb5li6kp05qm690kj', 'inactive', 'Test Location', 5);
        `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE nav");
    },
};
