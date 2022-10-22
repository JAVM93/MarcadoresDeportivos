var express = require('express');
var app = express();
const c = require('colors')
const db = require('./config/db');
const cors = require('cors')
const puerto = 3004
const jwt = require('jsonwebtoken')
 //const equipos = require('./controllers/equiposCtrl')

// console.log("Listado equipos".bgBlue)
// console.log(equipos.equipoListar())



app.get('/', function(req, res) {
  res.send('Servidor Basico!');
});

//importar rutas
app.use(express.json());
app.use(cors())
app.use("/api/acerca", require("./routes/paginas"));
app.use("/api/equipo/",require('./routes/equiposRoute'))
app.use("/api/categoria/",require('./routes/categoriasRoute'))
app.use("/api/evento/",require('./routes/eventosRoute'))
app.use("/api/usuario/",require('./routes/usuariosRoute'))
//app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(express.static('public'));
app.listen(puerto, function() {
  console.log('Aplicación ejemplo, escuchando el puerto ' + puerto);
});

db()