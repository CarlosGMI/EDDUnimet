'use strict';

module.exports = [
    {
        method: 'GET',
        path:'/',
        handler: function (request, reply) 
        {
            return reply.view('principal'); //El reply.view puede recibir otro parámetro que puede ser una variable que necesitamos pasar a la vista
        }
    },
    {
        method: 'GET',
        path: '/login',
        handler: function (request, reply)
        {
            return reply.view('login');
        }
    },
    {
        method: 'GET',
        path: '/perfilDocente',
        handler: function (request, reply)
        {
            return reply.view('perfilDocente');
        }
    },
    {
        method: 'GET',
        path: '/perfilJefe',
        handler: function (request, reply)
        {
            return reply.view('perfilJefe');
        }
    },
    {
        method: 'GET',
        path: '/evalEstudiante',
        handler: function (request, reply)
        {
            return reply.view('evalEstudiante');
        }
    },
    {
        method: 'GET',
        path: '/evalDocente',
        handler: function (request, reply)
        {
            return reply.view('evalDocente');
        }
    }
];