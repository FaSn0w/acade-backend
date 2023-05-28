'use strict';

const crypto = require('crypto');

const hash_value = crypto.createHash('md5').update('testing-hash').digest('hex');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Personals', [{
          name: 'Albert Einstein',
          active: true,
          email: 'einstein@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Isaac Newton',
          active: true,
          email: 'newton@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marie Curie',
          active: true,
          email: 'curie@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nikola Tesla',
          active: false,
          email: 'tesla@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Galileo Galilei',
          active: true,
          email: 'galilei@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Stephen Hawking',
          active: true,
          email: 'hawking@example.com',
          role: 'Personal',
          hash: hash_value,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Personals', null, {});
     
  }
};
