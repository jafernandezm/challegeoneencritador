/*
Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 
const ttMensaje=document.getElementById('mensaje');
const bttCopiar=document.getElementById('copiar');
const bttEncritar=document.querySelector('.encriptar');
const bttDesencritar=document.querySelector('.desencriptar');
const ttMensajeResultado=document.getElementById('resultado');
function encritar(){
    mostrarResultado();
    if(ttMensaje.value!=""){
    var mensaje=ttMensaje.value;
    var mensajeEncritado= mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    ttMensajeResultado.value=mensajeEncritado;
    ttMensaje.value="";
    }
}



function desencriptar(){
    mostrarResultado();
    if(ttMensaje.value!=""){
    var mensajeEncritado=ttMensaje.value;
    var mensaje= mensajeEncritado
    .replaceAll( "enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    ttMensajeResultado.value=mensaje;
    ttMensaje.value="";
    }
}

function mostrarResultado(){
    document.getElementById("aviso").style.display='none';
    document.getElementById("menuResultado").style.display="block";
}

bttCopiar.addEventListener('click', e=>{
    ttMensajeResultado.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})

bttEncritar.onclick=encritar;
bttDesencritar.onclick=desencriptar;









