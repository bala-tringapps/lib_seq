'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('bookDetails', {
      book_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
      title: {
        type: DataTypes.STRING,
        allowNull:false
      },
      author: {
        type: DataTypes.STRING,
        allowNull:false
      },
      edition:{
        type:DataTypes.STRING
      },
      publisher:{
        type:DataTypes.STRING
      },
      summary: {
        type: DataTypes.STRING
      },
      ISBN: {
        type: DataTypes.BIGINT
      },
      genre: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};