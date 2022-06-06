
let cedula = document.getElementById ("cedula");
let nombre  = document.getElementById ("nombre");
let btnValida = document.getElementById ("btnValida");
let mensaje = document.getElementById("mensaje");
let prueba = document.getElementById("prueba")
borrar.addEventListener("click", borre)

function borre(){
    prueba.classList.remove("fondo");
}

btnValida.addEventListener("click",Validar); 

function Validar ( ){
if (cedula.value ==""){ 
console.log("esta en blanco");
cedula.style.borderColor="red";
mensaje.classList,add("fondo");
prueba.classList.add("fondo")
mensaje.innerHTML = "cedula vacia"
  }
}