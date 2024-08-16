let contador = 0;
let nombre = "";
let edad = "";
let codigo = "";


function preguntar(){
    let respuesta = document.getElementById("respuestas").value;
    if (contador === 0){
        nombre = respuesta;
        document.getElementById("pregunta").innerText = "¿Cuantos años tienes?";
        document.getElementById("respuestas").value = "";
    }
    else if (contador === 1){
        edad = respuesta;
        document.getElementById("pregunta").innerText = "¿Que lenguaje de programacion estas estudiando?";
        document.getElementById("respuestas").value ="";
    }

    else if (contador === 2){
        codigo = respuesta;
        document.getElementById("pregunta").innerText = "Hola " +nombre + ", tienes " +edad+ " años y ya estas aprendiendo "+codigo+"!";
        document.getElementById("respuestas").value ="";
        setTimeout(opcional, 3000);
    }
    contador++;
}

function opcional(){
    let respuesta = prompt("¿Te gusta estudiar "+codigo+"? Responde con el número 1 para SÍ o 2 para NO")
    if (respuesta == 1){
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    }
    else{
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    }
}