"use strict";

/** @type {import('sequelize-cli').Migration} */
// id,name,price,discount,discountTitle,initial,status,
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
    INSERT INTO pricing (name,price,discount,discountTitle,features,initial,status) VALUES
    ( 'Free', 0, 10, 'discount title', 'Static Website, 1GB Storage', 5000, 'active'),
    ( 'Basic', 1200, 10, 'of Dashain', 'Dynamic Website, SEO, Ads support, Ad Block Remover, Backup and recovery, 10 GB, 1 Email', 5000, 'active'),
    ( 'Pro', 6000, 0, 'discount title', 'Dynamic Website,Blogs Support, SEO, Ads support,Ad Block Remover, Backup and recovery, 50 GB, 5 Email, Analytics, Social Media Integration', 10000, 'popular'),
    ( 'Premium', 12000, 0, 'discount title', 'Dynamic Website,Blogs Support,Ecommerce Support, SEO, Ads support, Ads Blocker Remover, Backup and recovery, 1TB, 10 Email, Analytics, Chat Bot, Social Media Integration, Payment Integration', 30000, 'active');
    `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE pricing");
    },
};
