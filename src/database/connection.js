const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2/promise");
require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_DIALECT = process.env.DB_DIALECT;

// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: DB_DIALECT,
//     logging: false,
//     pool: {
//         max: 10,
//         min: 0,
//         idle: 40000,
//     },
//     define: {
//         freezeTableName: true,
//         underscored: true,
//         timestamps: true,
//         createdAt: "created_at",
//         updatedAt: "updated_at",
//     },
// });

const mysql = mysql2
    .createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    })
    .catch((err) => {
        throw err;
    });

async function pingDB() {
    try {
        const [rows, fields] = await (
            await mysql
        ).query("SELECT 1 + 1 AS solution");
    } catch (error) {
        throw error;
    }
}

pingDB();

setTimeout(() => {
    pingDB();
}, 40000);

module.exports = { mysql };
