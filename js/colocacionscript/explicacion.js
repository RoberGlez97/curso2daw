var timer;
window.onload= function(){
    timer=setInterval("andar()",30/1000)
    console.log("jeymi")
    var dedo=document.querySelector("div");
    console.log(dedo.clientWidth);
    console.log(dedo.clientHeight);
    console.log(dedo.offsetWidth);
    console.log(dedo.offsetHeight);

    
}

/*
function mover(){
    var caja=document.getElementsByTagName("div")[0];
    var aleatorio=parseInt(Math.random()*(1900-1)+1);
    caja.style.left=aleatorio+"px";
    var aleatorio2=parseInt(Math.random()*(900-1)+1);
    caja.style.top=aleatorio2+"px";
}

function parar(){
    clearInterval(timer);
}

function reanudar(){
    timer=setInterval("mover()",50);
}

*/

function andar(){
    var dedo=document.querySelector("div");
    var salto=5;
    var estilo=window.getComputedStyle(dedo);
    var actual=parseInt(estilo.getPropertyValue("left"));
    actual+= salto;
    dedo.style.left=actual +"px";
}


