'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Exercises', [
      {
        training_id: 1,
        exercise: 'Agachamento',
        group: 'Pernas',
        series: '3',
        repetitions: '10',
        weight: 50,
        link: 'https://www.example.com/exercise1',
        user_id: 1,
        personal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training_id: 1,
        exercise: 'Supino',
        group: 'Peito',
        series: '3',
        repetitions: '8',
        weight: 60,
        link: 'https://www.example.com/exercise2',
        user_id: 2,
        personal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training_id: 2,
        exercise: 'Remada',
        group: 'Costas',
        series: '3',
        repetitions: '12',
        weight: 45,
        link: 'https://www.example.com/exercise3',
        user_id: 3,
        personal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training_id: 2,
        exercise: 'Desenvolvimento',
        group: 'Ombros',
        series: '3',
        repetitions: '10',
        weight: 30,
        link: 'https://www.example.com/exercise4',
        user_id: 4,
        personal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        training_id: 3,
        exercise: 'Rosca direta',
        group: 'Braços',
        series: '3',
        repetitions: '12',
        weight: 20,
        link: 'https://www.example.com/exercise5',
        user_id: 5,
        personal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Exercises', null, {});
  }
};
