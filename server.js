// const { sequelize } = require('./config/db')
const app = require('./app');
// await sequelize.sync({ force: true });
// console.log('All models were synchronized successfully.');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
