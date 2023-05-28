'use strict';
const crypto = require('crypto');

const hash_value = crypto.createHash('md5').update('testing-hash').digest('hex');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      name: 'Ana Souza',
      active: true,
      email: 'ana@ana.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcos Cintra',
      active: true,
      email: 'marcos@marcos.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Felipe Cardoso',
      active: true,
      email: 'felipe@felipe.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sandra Gomes',
      active: false,
      email: 'sandra@sandra.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Paula Morais',
      active: true,
      email: 'paula@paula.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sergio Lopes',
      active: true,
      email: 'sergio@sergio.com',
      role: 'aluno',
      hash: hash_value,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
