'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      training_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references :{model : "Trainings" , key :"id"}      

      },
      exercise: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      repetitions: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      link: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references :{model : "Users" , key :"id"}
      },
      personal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references :{model : "Personals" , key :"id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exercises');
  }
};