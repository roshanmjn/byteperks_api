"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("features", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                defaultValue: "active",
            },
            icon: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: Sequelize.DataTypes.TEXT("long"),
                allowNull: false,
            },
            uniqid: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("features");
    },
};
