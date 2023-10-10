"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**await queryInterface.createTable('users', { id: Sequelize.INTEGER });*/
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.createTable(
                "nav",
                {
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
                    orders: {
                        type: Sequelize.DataTypes.INTEGER,
                        allowNull: false,
                    },
                    link: {
                        type: Sequelize.DataTypes.STRING,
                        allowNull: true,
                        defaultValue: null,
                    },
                    status: {
                        type: Sequelize.DataTypes.TEXT,
                        allowNull: false,
                    },
                    submenu: {
                        type: Sequelize.DataTypes.STRING,
                        allowNull: false,
                    },
                    parent: {
                        type: Sequelize.DataTypes.INTEGER,
                        allowNull: false,
                    },
                },
                { transaction: transaction }
            );
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    async down(queryInterface, Sequelize) {
        /** await queryInterface.dropTable('users');*/
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.dropTable("nav", { transaction: transaction });
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },
};
