"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("hero", {
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
                allowNull: true,
                defaultValue: null,
            },
            image: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("hero");
    },
};
