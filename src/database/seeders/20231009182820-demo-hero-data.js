"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
        INSERT INTO hero ( title, description, status, image) VALUES
        ('Your Vision, Our Code: Creating Synergy in the Digital Universe', 'We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game.', 'active', 'https://cdn.byteperks.com/assets/img/hero-bg.jpg'),
        ('asdasd', 'Your Vision, Our Code: Creating Synergy in the Digital Universe', '', 'asdasdddss');
        `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE hero");
    },
};
