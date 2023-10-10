"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
    INSERT INTO socialmedia ( icon, name, link) VALUES
    ( "fab fa-facebook", "Facebook", "https://facebook.com/byteperks"),
    ( "fab fa-x-twitter", "Twitter", "https://twitter.com/byteperks"),
    ( "fab fa-instagram", "Instagram", "https://instagram.com/byteperks"),
    ( "fab fa-linkedin", "Linkedin", "https://www.linkedin.com/company/byteperks/"),
    ( "fab fa-youtube", "Youtube", "https://www.youtube.com/@bimashmaharjan"),
    ( "fab fa-tiktok", "Tiktok", "https://tiktok.com/@byteperks"),
    ( "fab fa-discord", "Discord", "https://discord.gg/ApCzHabxB7");
        `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE socialmedia");
    },
};
