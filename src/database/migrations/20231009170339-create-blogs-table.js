"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("blogs", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            uniqid: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            badge: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: Sequelize.DataTypes.TEXT("long"),
                allowNull: false,
            },
            image: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            readtime: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
            },
            views: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            category: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                defaultValue: "blog",
            },
            tags: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            meta: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                defaultValue: "active",
            },
            date: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("blogs");
    },
};
