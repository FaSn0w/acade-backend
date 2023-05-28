'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models){
      // define association here
        Exercises.belongsTo(models.Trainings, { foreignKey: 'training_id' });
        Exercises.belongsTo(models.Users, { foreignKey: 'user_id' });
        Exercises.belongsTo(models.Personals, { foreignKey: 'personal_id' });
      }         
  }
  Exercises.init({
    training_id: DataTypes.INTEGER,
    exercise: DataTypes.STRING,
    group: DataTypes.STRING,
    series: DataTypes.STRING,
    repetitions: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    link: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    personal_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exercises',
  });
  return Exercises;
};