'use strict';
const Hapi = require('hapi');
const Path = require('path');
const server = new Hapi.Server();
const Vision = require('vision');
const Inert = require('inert');
const servid = [{register: Vision}, {register: Inert}];

server.connection(
{ 
    host: process.env.IP || '0.0.0.0', 
    port: process.env.PORT || 3000 
});

server.register(servid, function(err)
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
});
    
// Start the server
server.start((err) => 
{
    if (err) 
    {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});