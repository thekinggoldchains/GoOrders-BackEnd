'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      foodavatar_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('products');
  },
};