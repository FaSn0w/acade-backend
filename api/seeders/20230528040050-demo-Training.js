'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trainings', [
      {
        name: 'Treino A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Treino B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Treino C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Treino D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Treino E',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Trainings', null, {});

  }
};
