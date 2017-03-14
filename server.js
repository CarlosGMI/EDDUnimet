'use strict';
const Hapi = require('hapi');
const rutas = require('./lib/routes');
const ejs = require('ejs');
const server = new Hapi.Server();
const Vision = require('vision');
const Inert = require('inert');
const basicAuth = require('hapi-auth-cookie');
const loginController = require('./lib/login');
const models = require('./models');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('c9','carlosgmi','',
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
            html: ejs
        },
        path: __dirname+'/vistas'
    });
});
//server.route(loginController);

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
    server.route(
    {
        method: 'GET',
        path: '/lib/js/{path*}',
        handler:    
        {
            file: 'login.js'
        }    
    });
    //const loginController = require('./lib/login');
    //server.route(loginController);
});

server.route(rutas);
server.route(loginController);

server.register(basicAuth, function(err)
{
    if(err)
    {
        console.log("Hubo un error cargando CookieAuth");
    }
});


/*server.auth.strategy('session', 'cookie', true,
{
    password: ' '
    //cookie: 'future-studio-hapi-tutorials-cookie-auth-example',
    //redirectTo: '/',
    //isSecure: false,
    //validateFunc: validation
});*/


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

/*server.register(servid, function(err)
{
    if(err)
    {
        throw err;
    }
    
    server.route(
    {
		method: 'GET', 
		path: '/public/{path*}', 
		handler: 
		{
			directory :
			{
				path: './public',
				listing : false,
				index : false
			}
		}
	});
    
    server.views(
    {
        engines:{html: require('handlebars')},
        relativeTo: __dirname,
        path: 'vistas'
    });

    server.route(
    {
        method: 'GET',
        path:'/', 
        handler: function (request, reply) 
        {
            return reply.view('principal'); //El reply.view puede recibir otro parámetro que puede ser una variable que necesitamos pasar a la vista
        }
    });
    server.route(
    {
        method: 'GET',
        path: '/login',
        handler: function (request, reply)
        {
            return reply.view('login');
        }
    });
    server.route(
    {
        method: 'GET',
        path: '/perfilDocente',
        handler: function (request, reply)
        {
            return reply.view('perfilDocente');
        }
    });
    server.route(
    {
        method: 'GET',
        path: '/perfilJefe',
        handler: function (request, reply)
        {
            return reply.view('perfilJefe');
        }
    });
     server.route(
    {
        method: 'GET',
        path: '/evalEstudiante',
        handler: function (request, reply)
        {
            return reply.view('evalEstudiante');
        }
    });
});*/
/*server.start((err) => 
{
    if (err) 
    {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});*/