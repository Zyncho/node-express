// Módulo para resaltar respuestas por consola
const colors = require('colors');

/*
Obtenemos el modulo de Express
  para la estructura básica de nuestro servidor y
  para el enrutamiento de solicitudes del usuario
*/
const express = require('express');
// Express debe ser inicializado antes de usarse
const server = express();

/*
Middlewares
  funciones introducidas por el método .use() para interceptar solicitudes
  se ejecutan por orden
  acaban ejecutando el parametro "next()" o no continuan los procesos
*/
server.use( (req,res, next) => {
  console.log("url solicitada: " + req.url);
  next();
});

/*
Enrutamiento
  El método .get intercepta las solictudes de las rutas que entran por GET
  consta de dos parametros: la ruta y la funcion que la manejará
  la respuesta se envía con los métodos send del parametro "res"
*/
server.get("/", (req,res) => {
  res.send('<h1>Hola Mundo!</h1><p>URL solicitada: ' + req.url +'</p>' )
});
server.get("/login", (req,res) => {
  res.send('<h1>Login</h1><p>URL solicitada: ' + req.url +'</p>' )
});
server.get("*",(req,res) => {
  res.send('<h1>Página no encontrada</h1><p>URL solicitada: ' + req.url +'</p>' )
});

/*
Servidor en escucha activa
  el método .listen activa la intercepción de interacciones por un puerto dado
  requiere un parametro integer que es el puerto
  y puede llevar uno más como una función para enviar mensajes por consola
*/
server.listen(3000, () =>{
  console.log("Servidor funcionando! (localhost:3000)".underline.brightGreen);
});
