const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const Etudiant = sequelize.define(
    'Etudiant',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        prenom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        age: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
        email: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        // class_id: {
        //     type: DataTypes.UUID,
        //     // allowNull defaults to true
        // },
    }
);

module.exports = Etudiant;