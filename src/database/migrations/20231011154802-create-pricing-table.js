"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("pricing", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            discount: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            discountTitle: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            features: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
            initial: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                defaultValue: "active",
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("pricing");
    },
};
