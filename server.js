'use strict';
const Hapi = require('hapi');
const Path = require('path');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection(
{ 
    host: process.env.IP || '0.0.0.0', 
    port: process.env.PORT || 3000 
});

server.register(require('vision'), function(err)
{
    if(err)
    {
        throw err;
    }
// Add the route
    server.route(
    {
        method: 'GET',
        path:'/', 
        handler: function (request, reply) 
        {
            return reply.view('principal');
        }
    });
    
    server.views(
    {
        engines:{html: require('handlebars')},
        relativeTo: __dirname,
        path: 'vistas'
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