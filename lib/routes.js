'use strict';
var models = require('../models');
var Docente = models.Docente;
var Estudiante = models.Estudiante;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('EDDUnimet','carlosgmi','', //'c9'
{
   host: '0.0.0.0',
   dialect: 'mysql'
});

module.exports = [
    {
        method: 'GET',
        path:'/',
        config:
        {
            auth: false,
            plugins: 
            {
                'hapi-auth-cookie': 
                {
                    redirectTo: false
                }
            }
        },
        handler: function (request, reply) 
        {
            console.log("cookie: "+request.auth.isAuthenticated);
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
        path: '/perfilDocente/{id?}',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                console.log("cookie: "+request.auth.isAuthenticated);
                return reply.view('perfilDocente');
            }
        }
    },
    {
        method: 'GET',
        path: '/perfilJefe/{id?}',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                console.log("cookie: "+request.auth.isAuthenticated);
                return reply.view('perfilJefe');
            }
        }
    },
    {
        method: 'GET',
        path: '/evalEstudiante/{id?}',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                console.log("cookie: "+request.auth.isAuthenticated);
                return reply.view('evalEstudiante');
            }
        }
    },
    {
        method: 'GET',
        path: '/evalDocente',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                return reply.view('evalDocente');
            }
        }
    },
    {
        method: 'GET',
        path: '/perfilEstudiante/{id?}',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                console.log("cookie: "+request.auth.isAuthenticated);
                console.log("url: "+request.query.id);
                sequelize.query('select Estudiante.nombre, Estudiante.apellido, Estudiante.carnet, Materia.nombre AS nombreM, Seccion.numero from Estudiante inner join Estudiante_Seccion on Estudiante.IDEstudiante = Estudiante_Seccion.IDEstudiante inner join Seccion on Estudiante_Seccion.IDSeccion = Seccion.IDSeccion inner join Materia on Seccion.IDMateria = Materia.IDMateria where Estudiante.IDEstudiante = :id; ',
                {replacements:{id: request.query.id}, type: sequelize.QueryTypes.SELECT}).then(function(estudiante)
                {
                    if(estudiante == null)
                    {
                        console.log("Ocurrió un sólido error");
                    }
                    else
                    {
                        console.log(estudiante);
                        sequelize.query('select Docente.nombre, Docente.apellido from Estudiante inner join Estudiante_Seccion on Estudiante.IDEstudiante = Estudiante_Seccion.IDEstudiante inner join Seccion on Estudiante_Seccion.IDSeccion = Seccion.IDSeccion inner join Docente on Seccion.IDDocente = Docente.IDDocente where Estudiante.IDEstudiante = :id; ',
                        {replacements:{id: request.query.id}, type: sequelize.QueryTypes.SELECT}).then(function(docente)
                        {
                            if(docente == null)
                            {
                                console.log("Ocurrió un 2do sólido error");
                            }
                            else
                            {
                                //console.log(docente); 
                                return reply.view('perfilEstudiante',{est: estudiante, doc: docente});
                            }
                        });
                    }
                }); 
            }
        }
    }
];