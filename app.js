// despliegue de menu derecha

var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0"
        menu.src = "https://i.postimg.cc/8z8RbF9L/close.png"
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "https://i.postimg.cc/PqjMdLMd/menu.png"
    }
}

//observer

const secincio = document.getElementById("sec-incio");
const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const sec6 = document.getElementById("sec6");
const sec7 = document.getElementById("sec7");
const sec8 = document.getElementById("sec8");

const LoadImage = (entradas, observador) => { 

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        }

       /* cuando ya no sea visible 
       else{
            entrada.target.classList.remove("visible")
        }
        */
       
    });
}

const observador = new IntersectionObserver(LoadImage, {
    root: null, 
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

observador.observe(secincio);
observador.observe(sec1);
observador.observe(sec2);
observador.observe(sec3);
observador.observe(sec4);
observador.observe(sec5);
observador.observe(sec6);
observador.observe(sec7);
observador.observe(sec8);

//Loader

window.onload = function(){
    var content = document.getElementById("c_loader");
    content.style.visibility = "hidden";
    content.style.opacity = "0";
}