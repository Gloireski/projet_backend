const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Enseignant = require('./Enseignant');

const Classe = sequelize.define(
    'Classe',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            // defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        niveau: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        enseignant_principal_id : {
            type: DataTypes.INTEGER,
            references: {
              model: Enseignant,
              key: "id"
            }
        }
    },
    {
        tableName: 'classe',
        timestamps: false
    }
)

// Classe.belongsTo(Enseignant, {
//     foreignKey: 'enseignant_principal_id',
//     targetKey: 'id'
// });

module.exports = Classe;