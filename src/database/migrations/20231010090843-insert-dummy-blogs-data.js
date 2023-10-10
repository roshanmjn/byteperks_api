"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`
    INSERT INTO blogs (uniqid, title, badge, content, image, readtime, views, category, tags, description, meta, status, date)
    VALUES ('blog1', 'Sample Blog 1', 'Beginner', 'This is the content of blog 1.', 'image1.jpg', 5, 100, 'Technology', 'Tech, Programming', 'A blog about technology trends.', 'Meta Data 1', 'active', NOW()),('blog2', 'Sample Blog 2', 'Intermediate', 'This is the content of blog 2.', 'image2.jpg', 7, 200, 'Science', 'Science, Research', 'A blog about scientific discoveries.', 'Meta Data 2', 'active', NOW()),('blog3', 'Sample Blog 3', 'Advanced', 'This is the content of blog 3.', 'image3.jpg', 10, 300, 'Health', 'Health, Wellness', 'A blog about staying healthy.', 'Meta Data 3', 'active', NOW()),('blog4', 'Sample Blog 4', 'Beginner', 'This is the content of blog 4.', 'image4.jpg', 6, 150, 'Food', 'Cooking, Recipes', 'A blog about delicious recipes.', 'Meta Data 4', 'active', NOW()),('blog5', 'Sample Blog 5', 'Intermediate', 'This is the content of blog 5.', 'image5.jpg', 8, 250, 'Travel', 'Travel, Adventure', 'A blog about exciting travel destinations.', 'Meta Data 5', 'active', NOW()),('blog6', 'Sample Blog 6', 'Advanced', 'This is the content of blog 6.', 'image6.jpg', 12, 500, 'Science', 'Science, Research', 'A blog about scientific discoveries.', 'Meta Data 6', 'active', NOW()),('blog7', 'Sample Blog 7', 'Beginner', 'This is the content of blog 7.', 'image7.jpg', 4, 75, 'Technology', 'Tech, Gadgets', 'A blog about the latest tech gadgets.', 'Meta Data 7', 'active', NOW()),('blog8', 'Sample Blog 8', 'Intermediate', 'This is the content of blog 8.', 'image8.jpg', 9, 300, 'Food', 'Cooking, Recipes', 'A blog about cooking techniques.', 'Meta Data 8', 'active', NOW()),('blog9', 'Sample Blog 9', 'Advanced', 'This is the content of blog 9.', 'image9.jpg', 11, 400, 'Health', 'Fitness, Nutrition', 'A blog about fitness and nutrition.', 'Meta Data 9', 'active', NOW()),('blog10', 'Sample Blog 10', 'Beginner', 'This is the content of blog 10.', 'image10.jpg', 7, 200, 'Travel', 'Travel, Destinations', 'A blog about travel experiences.', 'Meta Data 10', 'active', NOW());`);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE blogs");
    },
};
