"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("trusted", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            image: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
                defaultValue: "active",
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("trusted");
    },
};
