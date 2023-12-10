"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
        INSERT INTO nav ( name, orders, link, status, submenu, parent) VALUES
        ('Pricing', 3, 'pricing', 'active', '', 0),
        ('Blogs', 2, 'blogs', 'active', '', 0),
        ('Offers', 3, 'offers/abcdef', 'inactive', '', 0),
        ('About Us', 4, 'aboutus', 'active', '', 0),
        ('Services', 1, 'services', 'active', '', 0),
        ('Home', 0, '', 'active', '', 0);
        `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE nav");
    },
};
