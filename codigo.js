
// seleccionar elementos

const elemento1 = document.getElementById('elemento1');

const elemento2 = document.getElementById('elemento2');

const elemento3 = document.getElementById('elemento3');

const elemento4 = document.getElementById('elemento4');

const elemento5 = document.getElementById('elemento5');

const elemento6 = document.getElementById('elemento6');

const elemento7 = document.getElementById('elemento7');

const elemento8 = document.getElementById('elemento8');

const elemento9 = document.getElementById('elemento9');

// seleccionar botones de pj
const pj1 = document.getElementById('btn-pj1');

const pj2 = document.getElementById('btn-pj2');

// variable de seleccionado
seleccionado = false;

// seleccionar turno pj
pj1.addEventListener('click',()=>{
   seleccionado = true;
})

pj2.addEventListener('click',()=>{
    seleccionado = false
})




// eventos elementos

elemento1.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento1.innerHTML = "O"
    }
    else{
        elemento1.innerHTML = "X"
    }
})


elemento2.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento2.innerHTML = "O"
    }
    else{
        elemento2.innerHTML = "X"
    }
})

elemento3.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento3.innerHTML = "O"
    }
    else{
        elemento3.innerHTML = "X"
    }
})


elemento4.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento4.innerHTML = "O"
    }
    else{
        elemento4.innerHTML = "X"
    }
})


elemento5.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento5.innerHTML = "O"
    }
    else{
        elemento5.innerHTML = "X"
    }
})


elemento6.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento6.innerHTML = "O"
    }
    else{
        elemento6.innerHTML = "X"
    }
})


elemento7.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento7.innerHTML = "O"
    }
    else{
        elemento7.innerHTML = "X"
    }
})


elemento8.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento8.innerHTML = "O"
    }
    else{
        elemento8.innerHTML = "X"
    }
})


elemento9.addEventListener('click',(e)=>{
    if(seleccionado == true){
        elemento9.innerHTML = "O"
    }
    else{
        elemento9.innerHTML = "X"
    }
})



// reiniciar

const btnReiniciar = document.getElementById('btn-reiniciar');

btnReiniciar.addEventListener('click',()=>{
    elemento1.innerHTML = " ";
    elemento2.innerHTML = " ";
    elemento3.innerHTML = " ";
    elemento4.innerHTML = " ";
    elemento5.innerHTML = " ";
    elemento6.innerHTML = " ";
    elemento7.innerHTML = " ";
    elemento8.innerHTML = " ";
    elemento9.innerHTML = " ";
})


