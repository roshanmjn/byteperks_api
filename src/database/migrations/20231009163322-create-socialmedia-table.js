"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //icon, name, link
        await queryInterface.createTable("socialmedia", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            icon: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            link: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("socialmedia");
    },
};
