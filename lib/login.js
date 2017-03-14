'use strict';
var models = require('../models');
var Docente = models.Docente;
//const Inert = require('inert');
//var info = require('../public/js/login');
//console.log(info.email);

module.exports = [
{
    method: 'POST',
    path: '/iniciando',
    config:
    {
        handler: function (request, reply) 
        {
            console.log('AUTENTICARÉ A MIS USUARIOS');
            var emailU = request.payload.emailUsuario;
            var contrasenaU = request.payload.passwordUsuario;
            //AQUÍ HAY QUE VERIFICAR EL INPUT DEL CORREO PARA SABER EN QUÉ TABLA SE BUSCARÁ
            Docente.findOne(
            {
                where:
                {
                    email: emailU,
                    $and: {contrasena: contrasenaU} 
                }
            }).then(function(project)
            {
                if(project == null)
                {
                    reply("No existes en la base de datos");
                }
                else
                {
                    reply(project.nombre);
                    /*Una vez que ya encontramos al usuario en la base de datos le asignaremos una cookie de inicio de sesión
                    para obtener sus datos cada vez que se requieran y se le asigna la vista correspondiente de acuerdo a quién es*/
                }
            });
        }
    }
    /*config: 
    {
        auth:
        {
            mode: 'try'
        },
        plugins:
        {
            'hapi-auth-cookie': 
            {
                redirectTo: false
            }
        },
        handler: function (request, reply) 
        {
            reply('AUTENTICARÉ A MIS USUARIOS');
        }
    }*/
}];

/*$(document).ready(function() 
{
    $('#botonLogin').click(function() 
    {
        var correo = document.getElementById('correoElectronico').value;
        var contrasena = document.getElementById('contrasena').value;
        if(correo == "" || contrasena == "")
        {
            sweetAlert("Error!", "Por favor, complete los campos requeridos", "error");
        }
        else
        {
            Docente.findOne({ where: {email: correo} }).then(function(project) 
            {
                console.log(project.nombre);
            })
            //Buscar estos valores en las tablas con Sequelize
            //Autenticar
            //Encriptar la contraseña
        }
    });
});*/