'use strict';
const Hapi = require('hapi');
const rutas = require('./lib/routes');
const Ejs = require('ejs');
const server = new Hapi.Server();
const Vision = require('vision');
const Inert = require('inert');
const basicAuth = require('hapi-auth-cookie');
const loginController = require('./lib/login');
//console.log("shit"+loginController[0].config.handler);
const models = require('./models');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('EDDUnimet','carlosgmi','', //'c9'
{
   host: '0.0.0.0',
   dialect: 'mysql'
});
//const servid = [{register: CookieAuth}, {register: Inert}];

server.connection(
{ 
    host: process.env.IP || '0.0.0.0', 
    port: process.env.PORT || 3000 
});

server.register(Vision, function (err)
{
    if (err) 
    {
        console.log('No pudo registrarse Vision');
    }
    server.views(
    {
        engines: 
        {
            ejs: require('ejs')
        },
        path: __dirname+'/vistas'
    });
});

server.register(Inert, function(err) 
{
    if (err) 
    {
        throw err;
    }
    server.route(
    {
        method: 'GET', 
        path: '/public/{path*}',
        handler: 
        {
            directory: 
            {
                path: './public',
                listing : false,
                index : false
            }
        }
    });
});

server.register(basicAuth, function(err)
{
    if(err)
    {
        console.log("Hubo un error cargando CookieAuth");
    }
});

server.auth.strategy('inicio', 'cookie', false,
{
    password: 'password-should-be-32-characters',
    cookie: 'sid',
    redirectTo: '/login',
    isSecure: false,
    redirectOnTry: false
    //validateFunc: validation
});

server.route(rutas);
server.route(loginController);

models.sequelize.sync().then(function()
{
    server.start((err) => 
    {
        if (err) 
        {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });    
});