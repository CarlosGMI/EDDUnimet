'use strict';
const Joi = require('joi');
var models = require('../models');
var modeloB = models.EvaluacionB;
var respuesta = models.RespuestaEvB;
var pregunta = models.PreguntaB;

module.exports = [
{
    method: 'GET',
        path: '/evaluandob/{id?}',
        config:
        {
            auth: 'inicio',
            handler: function (request, reply)
            {
                var url =[];
                var cont = 0;
                console.log("ESTOY EVALUANDO A UN DOCENTE");
                console.log("url: "+request.query.sec+" roar: "+request.query.p1);
                Object.keys(request.query).map(function (key) 
                { 
                    url[cont] = request.query[key];
                    cont = cont + 1;
                    return request.query[key];
                });
                modeloB.create(
                {
                    IDSeccion: url[0]       
                }).then(function(encuesta)
                {
                    if(encuesta == null)
                    {
                        console.log("Ocurrió un sólido error");
                    }
                    else
                    {
                        for(var i=1;i<url.length;i++)
                        {
                            respuesta.create(
                            {
                                valor: url[i],
                                IDModeloB: encuesta.IDModeloB,
                                IDPreguntaB: i
                            }).then(function(respuesta)
                            {
                                if(respuesta == null)
                                {
                                    console.log("Respuesta "+i+" mala");
                                }
                                else
                                {
                                    console.log("Respuesta buena "+i);
                                }
                            });
                        }
                    }
                    console.log("Inserté en modeloB la sección "+encuesta.IDSeccion);
                    return reply.redirect('/exitoB');
                });
            }
        }
}];