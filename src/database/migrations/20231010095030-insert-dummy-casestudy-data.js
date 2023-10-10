"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query(`    
    INSERT INTO casestudy (company, description, status, content, featured, icon, image, location, logo, title, uniqid, website, technology)
    VALUES ('Company 1', 'Description 1', 'active', 'Content 1', 0, 'icon1.png', 'image1.jpg', 'Location 1', 'logo1.png', 'Title 1', 'uniqid1', 'https://www.company1.com', 'Technology 1'),('Company 2', 'Description 2', 'active', 'Content 2', 1, 'icon2.png', 'image2.jpg', 'Location 2', 'logo2.png', 'Title 2', 'uniqid2', 'https://www.company2.com', 'Technology 2'), ('Company 3', 'Description 3', CASE WHEN RAND() > 0.5 THEN 'active' ELSE '' END, 'Content 3', 0, 'icon3.png', 'image3.jpg', 'Location 3', 'logo3.png', 'Title 3', 'uniqid3', 'https://www.company3.com', 'Technology 3'),('Company 4', 'Description 4', CASE WHEN RAND() > 0.5 THEN 'active' ELSE '' END, 'Content 4', 1, 'icon4.png', 'image4.jpg', 'Location 4', 'logo4.png', 'Title 4', 'uniqid4', 'https://www.company4.com', 'Technology 4'),('Company 6', 'Description 6', CASE WHEN RAND() > 0.5 THEN 'active' ELSE '' END, 'Content 6', 0, 'icon6.png', 'image6.jpg', 'Location 6', 'logo6.png', 'Title 6', 'uniqid6', 'https://www.company6.com', 'Technology 6'),('Company 9', 'Description 9', 'active', 'Content 9', 1, 'icon9.png', 'image9.jpg', 'Location 9', 'logo9.png', 'Title 9', 'uniqid9', 'https://www.company9.com', 'Technology 9'),('Company 10', 'Description 10', 'active', 'Content 10', 0, 'icon10.png', 'image10.jpg', 'Location 10', 'logo10.png', 'Title 10', 'uniqid10', 'https://www.company10.com', 'Technology 10'), ('Company 11', 'Description 11', 'active', 'Content 11', 1, 'icon11.png', 'image11.jpg', 'Location 11', 'logo11.png', 'Title 11', 'uniqid11', 'https://www.company11.com', 'Technology 11'),('Company 12', 'Description 12', 'active', 'Content 12', 0, 'icon12.png', 'image12.jpg', 'Location 12', 'logo12.png', 'Title 12', 'uniqid12', 'https://www.company12.com', 'Technology 12'),('Company 13', 'Description 13', 'active', 'Content 13', 1, 'icon13.png', 'image13.jpg', 'Location 13', 'logo13.png', 'Title 13', 'uniqid13', 'https://www.company13.com', 'Technology 13'),('Company 14', 'Description 14', 'active', 'Content 14', 0, 'icon14.png', 'image14.jpg', 'Location 14', 'logo14.png', 'Title 14', 'uniqid14', 'https://www.company14.com', 'Technology 14'),('Company 15', 'Description 15', 'active', 'Content 15', 1, 'icon15.png', 'image15.jpg', 'Location 15', 'logo15.png', 'Title 15', 'uniqid15', 'https://www.company15.com', 'Technology 15'), ('Company 16', 'Description 16', 'active', 'Content 16', 0, 'icon16.png', 'image16.jpg', 'Location 16', 'logo16.png', 'Title 16', 'uniqid16', 'https://www.company16.com', 'Technology 16');
    `);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.query("TRUNCATE TABLE casestudy");
    },
};
