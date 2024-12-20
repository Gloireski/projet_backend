const { sequelize } = require('./models');
// const { connectDB } = require('./config/db');

// connectDB(sequelize);
// await sequelize.sync({ force: true });
// console.log('All models were synchronized successfully.');
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
