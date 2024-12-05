const { sequelize } = require('../config/db');
const Etudiant = require('./Etudiant');
const Enseignant = require('./Enseignant');
const CLasse = require('./Classe');
const Classe = require('./Classe');

Etudiant.belongsTo(Classe, { foreignKey: 'classe_id' });
Classe.belongsTo(Classe, { foreignKey: 'enseignant_principal_id'});

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