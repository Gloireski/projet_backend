const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Classe = sequelize.define(
    'Classe',
    {
        id: {
            type: DataTypes.UUID,
            // autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        niveau: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

module.exports = Classe;