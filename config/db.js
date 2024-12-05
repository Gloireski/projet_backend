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

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

// await sequelize.sync({ force: true });
// console.log('All models were synchronized successfully.');
// export default { sequelize };
module.exports = { sequelize };