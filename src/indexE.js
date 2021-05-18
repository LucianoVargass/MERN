const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./datebase')
const app = express();

//config

app.set('port', process.env.PORT || 3000)

//Middlewares

app.use(morgan('dev'));
app.use(express.json());

//rutas

app.use('/api/tareas', require('./routes/tareas.routes.js'));


//archivos estaticos

app.use(express.static( path.join(__dirname ,'public')))

//inicio de servidor 
app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`)
});