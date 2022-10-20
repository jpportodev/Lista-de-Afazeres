const express = require('express');

const checkListRouter = require('./src/routes/checklist');

require('./config/database.js');

const app = express();

app.use(express.json());

app.use('/checklists',checkListRouter);

app.listen(3000, ()=>{
    console.log('Servidor foi iniciado')});