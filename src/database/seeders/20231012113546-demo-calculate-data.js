"use strict";

/** @type {import('sequelize-cli').Migration} */
// id,divide,plan,prefix,status,
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
    INSERT INTO calculate (divide,plan,prefix,status) VALUES
    (12, 'monthly', 'mo', 'active'),
    (3, 'quaterly', '3 mo', NULL),
    (1, 'yearly', 'yr', NULL);
`);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE calculate");
    },
};
