//'use strict';
//var models = require('../models');
var jq = $.noConflict();
jq(document).ready(function() 
{
    jq('#botonLogin').click(function() 
    {
        var correo = document.getElementById('correoElectronico').value;
        var contrasena = document.getElementById('contrasena').value;
        if(correo == "" || contrasena == "")
        {
            sweetAlert("Error!", "Por favor, complete los campos requeridos", "error");
        }
        else
        {
            console.log("PREPARADO PARA EL EXPORT?");
            exports = [{email: correo}, {password: contrasena}];
        }
    });
});
//document.getElementById('botonLogin').onclick = function()