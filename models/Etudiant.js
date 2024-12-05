const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');
const Classe = require('./Classe');

const Etudiant = sequelize.define(
    'Etudiant',
    {
        // Model attributes are defined here
        id: {
            // type: DataTypes.UUID,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            // defaultValue: DataTypes.UUIDV4,
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
        classe_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Classe,
              key: "id"
            }
        },
    },
    {
      tableName: 'etudiants',
      timestamps: false 
    }
);

// Etudiant.belongsTo(Classe, {
//   foreignKey: 'classe_id',
//   targetKey: 'id'
// });

module.exports = Etudiant;