const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
 'project_backend',
 'root',
 'belem235',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);



// await sequelize.sync({ force: true });
// console.log('All models were synchronized successfully.');
// export default { sequelize };
module.exports = { sequelize };