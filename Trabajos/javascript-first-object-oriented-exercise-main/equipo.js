//>>>ARREGLO BASE DE TODO<<<<
var puntaje = [
];
//SUMA DE PUNTOS
var puntosFinal = 0;
//CANTIDAD GANADAS, PERDIDAS Y EMPATADAS
var ganado = 0;
var perdido = 0;
var empatado = 0;
//PORCENTAJE GANADAS, PERDIDAS Y EMPATADAS
var porcentaje_ganado = 0;
var porcentaje_perdido = 0;
var porcentaje_empatado = 0;
//PUNTOS LE HICIERON FALTA PARA TENER 5 ESTRELLAS
var faltaPuntos = 0;

//FUNCION DE BOTON
function btnClickAgregar() {
    var baseDato = document.getElementById("txtEquipo").value;
    puntaje.push(parseFloat(baseDato));

    //CONTADOR LABEL
    if(puntaje.length<20){
        document.getElementById("numeroPartido").innerHTML = puntaje.length + 1 + ": ";
    }

    //PROCESO BASE PEDIR NUMERO
    if(puntaje.length<=20){
         //RESULTADO DE EQUIPO
        switch (puntaje[puntaje.length-1]) {
            case 0:
                document.getElementById("puntoEquipo").innerHTML += "El partido " + puntaje.length + " lo perdieron <br>";
                break;
            case 1:
                document.getElementById("puntoEquipo").innerHTML += "El partido " + puntaje.length + " lo empataron <br>";
                break;
            case 3:
                document.getElementById("puntoEquipo").innerHTML += "El partido " + puntaje.length + " lo ganaron <br>";
                break;
            default:
                //MENSAJE ERROR
                var alerta = "";
                alerta += "ERROR\n";
                alerta += "Digitaste el numero: "+puntaje[puntaje.length-1]+" y no esta permitido.\n";
                alerta += "Debe ser:\n";
                alerta += "| 0 | Perdido\n";
                alerta += "| 1 | Empate\n";
                alerta += "| 3 | Ganado\n";
                alert(alerta);
                alert("Ya que no se digitó la opcion correpondiente, se reiniciara todo")
                window.location.reload();
        }
    };

    //CUANDO TERMINA EL GUARDAR DATOS
    if(puntaje.length==20){
        document.getElementById("ocultarTodo").style.display = "none";
        for (let i = 0; i < puntaje.length; i++){
            //SUMA DE PUNTOS (PROCESO)
            puntosFinal += puntaje[i];
            //CANTIDAD GANADOS, PERDIDOS Y EMPATADOS (PROCESO)
            switch (puntaje[i]) {
                case 0:
                    perdido++;
                    break;
                case 1:
                    empatado++;
                    break;
                case 3:
                    ganado++;
                    break;
            }
        }

        //1. PUNTOS GANADOS EN EL TORNEO (PANTALLA)
        document.getElementById("puntosTorneo").innerHTML = puntosFinal;

        //2. PORCENTAJE DE GANADOS, PERDIDOS Y EMPATADOS
            //OPERACION
        porcentaje_ganado = parseInt((ganado*100)/20);
        porcentaje_perdido = parseInt((perdido*100)/20);
        porcentaje_empatado = parseInt((empatado*100)/20);
            //PANTALLA
        document.getElementById("porcentajeGanados").innerHTML += "Ganados: "+porcentaje_ganado+"%"+"<br>";
        document.getElementById("porcentajePerdidos").innerHTML += "Perdidos: "+porcentaje_perdido+"%"+"<br>";
        document.getElementById("porcentajeEmpatados").innerHTML += "Empatados: "+porcentaje_empatado+"%"+"<br>";

        //3. ESTRELLAS GANADAS POR EL TORNEO (PANTALLA)
        if(porcentaje_ganado>=60){
            document.getElementById("estrellas").innerHTML = "5 Estrellas";
        }else if(porcentaje_ganado>=40 && porcentaje_ganado<=59){
            document.getElementById("estrellas").innerHTML = "4 Estrellas";
        }else if(porcentaje_ganado>=20 && porcentaje_ganado<=39){
            document.getElementById("estrellas").innerHTML = "3 Estrellas";
        }else{
            document.getElementById("estrellas").innerHTML = "2 Estrellas";
        }

        //4. CANTIDAD GANADAS, PERDIDAS Y EMPATADAS (PANTALLA)
        document.getElementById("cantidadG").innerHTML = "Ganados: "+ganado+"<br>";
        document.getElementById("cantidadP").innerHTML = "Perdidos: "+perdido+"<br>";
        document.getElementById("cantidadE").innerHTML = "Empatados: "+empatado+"<br>";

        //5. CUANTOS PUNTOS LE HICIERON FALTA PARA TENER 5 ESTRELLAS
            //OPERACION
        faltaPuntos = 12 - ganado;
            //PANTALLA

        if(ganado<12){
            if(ganado==11){
                document.getElementById("puntosFaltantes").innerHTML = "Hizo falta "+faltaPuntos+" partido ganado para poder tener 5 estrellas";
            }else{
                document.getElementById("puntosFaltantes").innerHTML = "Hicieron falta "+faltaPuntos+" partidos ganados para poder tener 5 estrellas";
            }
        }else{
            document.getElementById("puntosFaltantes").innerHTML = "No necesitan puntos porque ya tienen 5 estrellas";
        }
    }
}