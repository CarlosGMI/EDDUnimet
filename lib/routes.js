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
                console.log("cookie: "+request.auth.credentials.apellido);
                console.log("cookie: "+request.auth.isAuthenticated);
                console.log("url: "+request.query.id);
                sequelize.query('select Docente.nombre as nombreDoc, Docente.apellido, Materia.nombre as nombreM, Seccion.numero from Docente inner join Seccion on Docente.IDDocente = Seccion.IDDocente inner join Materia on Seccion.IDMateria = Materia.IDMateria where Docente.IDDocente = :id; ',
                {replacements:{id: request.query.id}, type: sequelize.QueryTypes.SELECT}).then(function(docente)
                {
                    if(docente == null)
                    {
                        console.log("Ocurrió un sólido error");
                    }
                    else
                    {
                        console.log(docente);
                        return reply.view('perfilDocente',{doc: docente});
                    }
                });
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
                console.log("cookie: "+request.auth.credentials.apellido);
                console.log("cookie: "+request.auth.isAuthenticated);
                console.log("url: "+request.query.id);
                sequelize.query('select Docente.nombre as nombreDoc, Docente.apellido, Docente.email, Departamento.IDDepartamento, Departamento.nombre as nombreDep from Docente inner join Docente_Departamento on Docente.IDDocente = Docente_Departamento.IDDocente inner join Departamento on Docente_Departamento.IDDepartamento = Departamento.IDDepartamento where Docente.IDDocente = :id; ',
                {replacements:{id: request.query.id}, type: sequelize.QueryTypes.SELECT}).then(function(jefe)
                {
                    if(jefe == null)
                    {
                        console.log("Ocurrió un sólido error");
                    }
                    else
                    {
                        //console.log("ID: "+jefe[0].IDDepartamento);
                        sequelize.query('select Docente.nombre as nombreDoc, Docente.apellido, Docente.email, Materia.nombre as nombreM, Seccion.numero from Departamento inner join Materia on Departamento.IDDepartamento = Materia.IDDepartamento inner join Seccion on Materia.IDMateria = Seccion.IDMateria inner join Docente on Seccion.IDDocente = Docente.IDDocente where Departamento.IDDepartamento = :id; ',
                        {replacements:{id: jefe[0].IDDepartamento}, type: sequelize.QueryTypes.SELECT}).then(function(docente)
                        {
                            if(docente == null)
                            {
                                console.log("Ocurrió un 2do sólido error");
                            }
                            else
                            {
                                //console.log(docente); 
                                return reply.view('perfilJefe',{jefdep: jefe, doc: docente});
                            }
                        });
                    }
                }); 
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
                console.log("cookie: "+request.auth.credentials.apellido);
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
                        //console.log(estudiante);
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