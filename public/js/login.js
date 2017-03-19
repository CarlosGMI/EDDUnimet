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
            return false;
        }
        else
        {
            var comprobacion = correo.substring(correo.indexOf("@") + 1);
            console.log(comprobacion);
            if(comprobacion == "correo.unimet.edu.ve" || comprobacion == "unimet.edu.ve")
            {
                console.log("Los inputs están llenos");
            }
            else
            {
                sweetAlert("Error!", "Por favor, use un correo autorizado por la UNIMET", "error");
                return false;
            }
            //exports = [{email: correo}, {password: contrasena}];
        }
    });
});
//document.getElementById('botonLogin').onclick = function()