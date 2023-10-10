"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
        INSERT INTO trusted (image,title) VALUES
        ("https://api.byteperks.com/assets/img/worldlink.png","WorldLink"),
        ("https://api.byteperks.com/assets/img/gadgetsgeek.png","Gadgets Geek"),
        ("https://api.byteperks.com/assets/img/lorem.png","Lorem"),
        ("https://api.byteperks.com/assets/img/ipsum.png","Ipsum");    
    `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE trusted");
    },
};
