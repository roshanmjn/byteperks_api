"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("casestudy", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            company: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
                defaultValue: "active",
            },
            content: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            featured: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            icon: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            logo: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            uniqid: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            technology: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("casestudy");
    },
};
