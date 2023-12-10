"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("calculate", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            divide: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            plan: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            prefix: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("calculate");
    },
};
