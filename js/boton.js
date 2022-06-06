btnN1= document.getElementById("btn-n1");

btnN1.addEventListener("click",function(){
    alert("El amor de mi vida");
})

btnN2= document.getElementById("btn-n2");

btnN2.addEventListener("click",function(){
    alert("Safi");
})

btnN3= document.getElementById("btn-n3");

btnN3.addEventListener("click",function(){
    alert("Santi");
})

btnN4= document.getElementById("btn-n4");

nombre = document.getElementById("nombre");

btnN4.addEventListener("click", mostrarTexto);
function mostrarTexto(){
    alert(nombre.value);
}
