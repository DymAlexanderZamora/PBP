const section_a = document.getElementById('menu_ataque')
const boton_ser = document.getElementById('boton_ser')
const section_r = document.getElementById('reinicio')
const b_reiniciar = document.getElementById('boton_reinicio')
const section_s = document.getElementById('ser')
const span_ser_aliado = document.getElementById('ser_aliado')
const span_ser_ene=document.getElementById("ser_ene")
const spanvj = document.getElementById('v_j')
const spanve = document.getElementById('v_e')
const menu_seres =document.getElementById('menu_ser')
const contenedor_a = document.getElementById('cont_ataques')
let sect_mensajito = document.getElementById('mensajito')
let sect_mensajitof = document.getElementById('mensajitof')
const sec_mapa = document.getElementById('s_mapa')
const can_mapa = document.getElementById('c_map')
let input_parkard 
let input_maghat 
let input_parlansound 
let input_mutded 
let input_morthon 
let input_folky 
let a_j 
let a_ene
let vj=3
let ve=3
let op_ser
let seres = []
let ser_a
let ser_e
let ataques_ser
let b_muerte
let b_magico
let b_sonido
let botones = []
let lienzo = c_map.getContext("2d")
/* la siguiente clase es para crear seres*/

function agregar_seres(){
    class Ser {
        constructor (nombre,foto, vida){
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques=[]
            this.x =20
            this.y= 30
            this.ancho = 20
            this.alto = 20
            this.mapafoto = new Image()
            this.mapafoto.src = foto
        }
    }
    let parkard = new Ser('parkard','https://img.pokemondb.net/sprites/black-white/normal/gengar.png',5)
    let maghat = new Ser('maghat','https://img.pokemondb.net/sprites/diamond-pearl/normal/honchkrow.png',4)
    let parlansound = new Ser('parlansound','https://img.pokemondb.net/sprites/sword-shield/normal/rillaboom.png',5)
    let mutded = new Ser('mutded','https://img.pokemondb.net/sprites/sword-shield/normal/trevenant.png',4)
    let morthon = new Ser('morthon','https://img.pokemondb.net/sprites/sword-shield/normal/noivern.png',5)
    let folky = new Ser('folky','./js/folky.png',4)
    parkard.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    maghat.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    parlansound.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    mutded.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    morthon.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    folky.ataques.push(
        {nombre:'☠️', id:'muerte'},
        {nombre:'🪄', id:'magico'},
        {nombre:'🎵', id:'sonido'}
    )
    seres.push(
        parkard,
        maghat,
        parlansound,
        mutded,
        morthon,
        folky
        )
    seres.forEach((Ser)=> {
        op_ser = `
            <input type="radio" name="ser" id=${Ser.nombre} />
            <label class="cardser" for=${Ser.nombre} >
                <img class="imagenI" src="${Ser.foto}" alt${Ser.nombre} />
                ${Ser.nombre}
                <img class="imagen" src=${Ser.foto}  alt${Ser.nombre} />
            </label>
        `;
            menu_seres.innerHTML += op_ser
    }
    );
}

/* 
Funcion para invocar una variable que creara un evento 
sobre este al darle click
*/
function aleatorio(min,max){
    return Math.floor( Math.random() * (max-min+1) + min )
} 
/*
la siguiente funcion se guardan en variables,
los eventos que suceden en los 4 botones
para modificarlos mas adelante
*/
function inicio_juego (){

section_a.style.display ='none'
sec_mapa.style.display ='none'

    boton_ser.addEventListener('click',selec_ser_ali)
    agregar_seres ();
    section_r.style.display ='none'
    b_reiniciar.addEventListener('click', reinicio)
} 
/*esta funcion devuelve un mensaje para verificar que 
el boton funciona correctamente
*/
function selec_ser_ali(){
input_parkard = document.getElementById('parkard')
input_maghat = document.getElementById('maghat')
input_parlansound = document.getElementById('parlansound')
input_mutded = document.getElementById('mutded')
input_morthon = document.getElementById('morthon')
input_folky = document.getElementById('folky')
    section_s.style.display ='none'
    //section_a.style.display ='flex'
    sec_mapa.style.display ='flex'
    if (input_parkard.checked){
        span_ser_aliado.innerHTML= input_parkard.id
        ser_a = input_parkard.id
    }else if (input_maghat.checked){
        span_ser_aliado.innerHTML= input_maghat.id
        ser_a = input_maghat.id
    }else if (input_parlansound.checked){
        span_ser_aliado.innerHTML= input_parlansound.id
        ser_a = input_parlansound.id
    }else if (input_mutded.checked){
        span_ser_aliado.innerHTML= input_mutded.id
        ser_a = input_mutded.id
    }else if (input_morthon.checked){
        span_ser_aliado.innerHTML= input_morthon.id
        ser_a = input_morthon.id
    }else if (input_folky.checked){
        span_ser_aliado.innerHTML= input_folky.id
        ser_a = input_folky.id
    }else {
        alert('no ha escogido mascota')
    reinicio();
    }
    ext_ataques(ser_a);
    selec_ser_ene ()
}
/* la siguiente funcion es para llamar
    los ataques de cada ser */
function ext_ataques (ser_a){
    let ataques
    for (let i = 0 ; i < seres.length ; i++) {
        if (ser_a === seres[i].nombre){
            ataques = seres[i].ataques
        }    
    }
ver_ataques(ataques)
}
/* La siguiente funcion es para que
    se puedan visualizar los ataques */
function ver_ataques (ataques) {
    ataques.forEach( (ataque)=>
        {
        ataques_ser = 
        `
        <button id= ${ataque.id} class="botona boton_a"> ${ataque.nombre}
        </button>
        `
        cont_ataques.innerHTML += ataques_ser
        }
    )
    b_muerte = document.getElementById("muerte")
    b_magico  = document.getElementById("magico")
    b_sonido = document.getElementById("sonido")
    b_muerte.addEventListener('click', a_muerte)
    b_magico.addEventListener('click', a_magico)
    b_sonido.addEventListener('click', a_sonido)
    botones =document.querySelectorAll('.boton_a')
    console.log(botones)

}
function a_muerte() {
    a_j = 'FUEGO'
    a_aleatorio_ene()
}
function a_magico() {
    a_j = 'AGUA'
    a_aleatorio_ene()
}
function a_sonido() {
    a_j = 'TIERRA'
    a_aleatorio_ene()
}
/* funcion para seleccionar el ser
del enemigo mediante un metodo de
numeros aleatorios
*/
function selec_ser_ene (){
let serene=aleatorio(1,seres.length -1)
    span_ser_ene.innerHTML = seres[serene].nombre
}
//Funcion para El Ataque aleatorio del enemigo
function a_aleatorio_ene(){
    let a_ale_ene =aleatorio(1,3)
    if (a_ale_ene==1){
        a_ene = "Putrefacción"
        } else if (a_ale_ene==2){
        a_ene = "Hechizo"
        } else {
        a_ene = "Onda"
    }
combate();
}
  //Combate 🤯
function combate() {
    if(a_j==a_ene) {
        mensaje("😑 EMPATE 😑")
    } else if(a_j == 'Putrefacción' && a_ene == 'Onda'){
        mensaje("🎉GANASTE ESTA RONDA🎉")
        ve--
        spanve.innerHTML=ve
    } else if(a_j == 'Hechizo' && a_ene == 'Putrefaccón') {
        mensaje("🎉GANASTE ESTA RONDA🎉")
        ve--
        spanve.innerHTML=ve
    } else if(a_j == 'Onda' && a_ene == 'Hechizo') {
        mensaje("🎉GANASTE ESTA RONDA🎉")
        ve--
        spanve.innerHTML=ve
    } else {
        mensaje("🤯PERDISTE ESTA RONDA🤯")
        vj--
        spanvj.innerHTML=vj
    }
vidas();
}
function vidas() {
    if (ve == 0) {
        mensajef("🎉FELICITACIONES🎉 Ganaste el Duelo 🥳")
    section_r.style.display ='flex'
    } else if (vj == 0) {
        mensajef('👻Lo siento👻 Perdiste el Duelo')
    section_r.style.display ='flex'
    }
}

function mensaje(resultado){
    let mensaje1= document.createElement('p')
    mensaje1.innerHTML="Tu Ser ataco con [|  "+a_j+"  |]"+"\n El Ser del oponente ataco con [|  "+a_ene+"  |]  "+resultado;
    sect_mensajito.appendChild(mensaje1)
}

function mensajef(resultadof) {
    let mensaje1 = document.createElement('p')
    mensaje1.innerHTML = resultadof
    sect_mensajitof.appendChild(mensaje1)
    
    b_muerte.disabled = true
    b_magico.disabled = true
    b_sonido.disabled = true
}
function reinicio(){
    location.reload()
}   
function pintar_seres(){
    lienzo.clearRect(0,0,sec_mapa.width, sec_mapa.height)
    lienzo.drawImage(
        ser.mapafoto,
        ser.x,
        ser.y,
        ser.ancho,
        ser.alto
    )
}
function arriba(){
    ser.y=ser.y + 5
    pintar_seres();
}
function abajo(){
    ser.y=ser.y - 5
    pintar_seres();
}
function derecha(){
    ser.x=ser.x + 5
    pintar_seres();
}
function izquierda(){
    ser.x=ser.x - 5
    pintar_seres();
}
window.addEventListener('load',inicio_juego)