"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("getstarted", {
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
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
            },
            viber: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            whatsapp: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            address: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            service_type: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            pricing: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            message: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("getstarted");
    },
};
