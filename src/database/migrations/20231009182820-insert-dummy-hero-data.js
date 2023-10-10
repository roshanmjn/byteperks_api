"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
        INSERT INTO hero ( title, description, status, image) VALUES
            ( 'tesasd', 'asdasd', 'active', 'asd'),
            ( 'asdasd', 'asdasdasdasd', '', 'asdasdddss');`);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE hero");
    },
};
