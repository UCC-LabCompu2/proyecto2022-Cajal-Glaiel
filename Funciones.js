function AbrirJuego(){
    let url;
    url = "Juego.html";
    window.open(url);
}

/*function DibujarCanvas() {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
}*/

function FunAyudas() {
    let num1, num2;
    num1 = Number(document.getElementById("multi1").value);
    num2 = document.getElementById("multi2").value;
    document.getElementById("resultadoAyudas").innerHTML = num1 * Number(num2);
}

function Segundero(){
    segundos=0;
    minutos=0
    s= document.getElementById("segundos");
    m=document.getElementById("minutos")

    tiempero=setInterval(
        function(){
            if(segundos==60){
                segundos=0;
                minutos++;
                m.innerHTML=minutos;
                if(minutos==60){
                    minutos=0;
                }
            }
            s.innerHTML=segundos;
            segundos++
        },1000 );
    console.log(tiempero)
}

function Juguemos(){
    let min =1;
    let max=10;
    let numero1=Math.random()*(max-min)+min;
    let numero2=Math.random()*(max-min)+min;
    let n1=Math.trunc(numero1) //saco los decimales
    let n2=Math.trunc(numero2)//saco los decimales
    document.getElementById("num1").innerHTML = n1;
    document.getElementById("num2").innerHTML = n2;
    let correcto = numero1 * numero2;
    return correcto;
}

function SumarPuntaje () {
    let puntaje = document.getElementById("puntaje").innerHTML;
    let n1 = document.getElementById("num1").innerHTML;
    let n2 = document.getElementById("num2").innerHTML;
    let correcto = n1 * n2;
    console.log(correcto)
    let respuesta = document.getElementById("num3").value;
    if (correcto == respuesta) {
        puntaje = Number(puntaje) + 10;
    } else {
        alert("Respuesta incorrecta")
        puntaje = Number(puntaje) - 10;
    }
    document.getElementById("puntaje").innerHTML = puntaje;
    Juguemos()
    document.getElementById("num3").value = "";
}