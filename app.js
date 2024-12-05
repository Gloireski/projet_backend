const express = require('express')
const app = express()

const indexRouter = require('./routes/index');
const etudiantsRouter = require('./routes/etudiants');
const enseignantsRouter = require('./routes/enseignants');
const classesRouter = require('./routes/classes');

app.use(express.json());

app.use('/', indexRouter);
app.use('/etudiants', etudiantsRouter);

module.exports =  app ;
// module.exports = { port };
