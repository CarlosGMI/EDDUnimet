'use strict';
const Joi = require('joi');
var models = require('../models');
var Docente = models.Docente;
var Estudiante = models.Estudiante;

module.exports = [
{
    method: 'POST',
    path: '/iniciando',
    config:
    {
        plugins: 
        {
            'hapi-auth-cookie': 
            {
                redirectTo: false
            }
        },
        handler: function (request, reply) 
        {
            console.log('AUTENTICARÉ A MIS USUARIOS');
            var emailU = request.payload.emailUsuario;
            var contrasenaU = request.payload.passwordUsuario;
            var comprobacion = emailU.substring(emailU.indexOf("@") + 1);
            if(comprobacion == "correo.unimet.edu.ve")
            {
                console.log("AUTENTICARÉ A ESTUDIANTE");
                Estudiante.findOne(
                {
                    where:
                    {
                        email: emailU,
                        $and: {contrasena: contrasenaU} 
                    }            
                }).then(function(estudiante)
                {
                    if(estudiante == null)
                    {
                        reply("Verifica tus datos e intenta de nuevo");
                    }
                    else
                    {
                        request.cookieAuth.set(estudiante); //Asigno la cookie de inicio de sesión a este docente
                        return reply.redirect('/perfilEstudiante/?id='+estudiante.IDEstudiante);
                        //return reply.view('perfilDocente',{docenteLogeado: docente}); //+encodeURIComponent(docente.id) reply.redirect('/dashboard')
                    }
                });
            }
            else if(comprobacion == "unimet.edu.ve")
            {
                console.log("AUTENTICARÉ A DOCENTE");
                Docente.findOne(
                {
                    where:
                    {
                        email: emailU,
                        $and: {contrasena: contrasenaU} 
                    }
                }).then(function(docente)
                {
                    if(docente == null)
                    {
                        reply("Verifica tus datos e intenta de nuevo");
                    }
                    else
                    {
                        request.cookieAuth.set(docente);
                        if(docente.admin == true)
                        {
                            return reply.redirect('/perfilJefe/?id='+docente.IDDocente);
                        }
                        else
                        {
                            return reply.redirect('/perfilDocente/?id='+docente.IDDocente);
                        }
                    }
                });
            }
        }
    }
},
{
    method: 'GET',
    path: '/logout',
    config:
    {
        plugins: 
        {
            'hapi-auth-cookie': 
            {
                redirectTo: false
            }
        },
        handler: function(request, reply)
        {
            console.log("ME SALDRÉ DE MI CUENTA");
            request.cookieAuth.clear();
            console.log("cookie: "+request.auth.isAuthenticated);
            reply.redirect('/');
        }
    }
}];