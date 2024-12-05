const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const Enseignant = sequelize.define(
    'Enseignant',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            // autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        prenom: {
          type: DataTypes.STRING,
          allowNull: false,
          // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
        matiere: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    }
);

module.exports = Enseignant;