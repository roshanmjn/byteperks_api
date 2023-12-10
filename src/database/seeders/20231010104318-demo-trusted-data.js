"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
        INSERT INTO trusted (id, image, title, status) VALUES
        (1, 'https://cdn.byteperks.com/assets/img/wlink.jpg', 'WorldLink', 'active'),
        (2, 'https://cdn.byteperks.com/assets/img/gadgetsgeek.png', 'Gadgets Geek', 'active'),
        (3, 'https://cdn.byteperks.com/assets/img/wonderful.png', 'Wonderful Multipurpose Co-operative Society Ltd', 'active'),
        (4, 'https://api.byteperks.com/assets/img/ipsum.png', 'Ipsum', 'active');   
    `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE trusted");
    },
};
