//Funcion de Crear el numero aleatorio y aproximarlo a entero, con parametros por seleccionar
function aleatorio(min,max){
    return Math.floor( Math.random() * (max-min+1) + min )
}
function eleccion (jugada){
    let resultado = ""
    //Textos del Jugador
    if (jugada==1){
        resultado=" 🪨"
    } else if (jugada==2){
        resultado=" 🧻"
    }else if (jugada==3){
        resultado=" ✂️"
    }else (
        resultado ="papi uste ni sabe que esta haciendo")
    return resultado
}

/*
piedra=1
papel=2
tijera=3
*/


let jugador=0;
let pc =aleatorio(1,3);
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    jugador= prompt(" Elije👀\n 1- 🪨Piedra🪨 -1 \n 2- 🧻Papel🧻 -2 \n 3- ✂️Tijera✂️ -3")
alert("PC Elige: "+ eleccion(pc))
alert ("tu eliges: "+ eleccion(jugador))

    //Combate 🤯
    if (pc==jugador){
        alert("Es un Empate 🤝")
    } else if (jugador == 1 && pc == 3){
        alert(" Ganaste 🥳")
        triunfos = triunfos+1
    } else if (jugador == 2 && pc == 1){
        alert(" Ganaste 🥳")
        triunfos = triunfos+1
    } else if (jugador == 3 && pc == 2){
        alert (" Ganaste 🥳")
        triunfos = triunfos+1
    }
    else {
        alert("Perdiste 🤯")
        perdidas = perdidas+1
    }
    
}
alert (" 🪄 "+triunfos+" 🪄 "+"\n ☠️ "+perdidas+" ☠️ ") 