const { sequelize } = require('../config/db');
const Etudiant = require('./Etudiant');
const Enseignant = require('./Enseignant');
const Classe = require('./Classe');
// const { classToInvokable } = require('sequelize/types/lib/utils');

Etudiant.belongsTo(Classe, { foreignKey: 'classe_id', as: 'classe' , onUpdate: 'CASCADE'});

// Relation : Une classe a plusieurs étudiants
Classe.hasMany(Etudiant, { foreignKey: 'classe_id', as: 'etudiants' });

// Relation : Une classe a un enseignant principal
Classe.belongsTo(Enseignant, { 
    foreignKey: 'enseignant_principal_id',
    as: 'enseignant_principal' ,
    onDelete: 'CASCADE',  });

// Relation : Un enseignant peut enseigner plusieurs classes
Enseignant.hasMany(Classe, { foreignKey: 'enseignant_principal_id', as: 'classes' });


sequelize.sync({ force: true })
    .then(() => {
        console.log('Database and table created')
    })

module.exports = {
    sequelize,
    Etudiant,
    Enseignant,
    Classe
}