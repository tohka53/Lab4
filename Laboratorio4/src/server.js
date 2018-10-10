//server.js

import express, { static, logger, bodyParser, methodOverride } from 'express';
var app 		= express();
import { connect } from 'mongoose';

// Conexión con la base de datos
connect('mongodb://localhost:27017/angular-todo');

// Configuración
app.configure(function() {
	// Localización de los ficheros estÃ¡ticos
	app.use(static(__dirname + '/public'));
	// Muestra un log de todos los request en la consola		
	app.use(logger('dev'));	
	// Permite cambiar el HTML con el método POST					
	app.use(bodyParser());
	// Simula DELETE y PUT						
	app.use(methodOverride());					
});

// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
	console.log('App listening on port 8080');
});
// Definición de modelos
var Todo = mongoose.model('Todo', {
	text: String
});