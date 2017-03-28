function validarScroll() 
{
    console.log("Entro al validarScroll");
    var valido = true;
    $('.inputEvaluacionB').each(function(i) 
    {
        if($('.inputEvaluacionB').val() == 0)
        {
            valido = false;
        }
    });
    
    if(valido == true)
    {
        console.log("Todos los scroll están llenos");
        var seccion = document.getElementById("seccionEscondida").value;
        var p1 = document.getElementById("test1").value;
        var p2 = document.getElementById("test2").value;
        var p3 = document.getElementById("test3").value;
        var p4 = document.getElementById("test4").value;
        var p5 = document.getElementById("test5").value;
        var p6 = document.getElementById("test6").value;
        var p7 = document.getElementById("test7").value;
        var p8 = document.getElementById("test8").value;
        var p9 = document.getElementById("test9").value;
        var p10 = document.getElementById("test10").value;
        var p11 = document.getElementById("test11").value;
        var p12 = document.getElementById("test12").value;
        var p13 = document.getElementById("test13").value;
        var p14 = document.getElementById("test14").value;
        var p15 = document.getElementById("test15").value;
        var p16 = document.getElementById("test16").value;
        var p17 = document.getElementById("test17").value;
        window.location.href = '/evaluandob/?sec='+seccion+'&p1='+p1+'&p2='+p2+'&p3='+p3+'&p4='+p4+'&p5='+p5+'&p6='+p6+'&p7='+p7+'&p8='+p8+'&p9='+p9+'&p10='+p10+'&p11='+p11+'&p12='+p12+'&p13='+p13+'&p14='+p14+'&p15='+p15+'&p16='+p16+'&p17='+p17;
    }
    else
    {
        console.log("HAY ALGÚN SCROLL VACÍO");
        sweetAlert("Error!", "Por favor, responda todas las preguntas o no marque 0 en ellas", "error");
    }
}