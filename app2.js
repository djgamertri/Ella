// despliegue de menu derecha

var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


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

const sec0 = document.getElementById("sec0");

const LoadImage = (entradas, observador) => { 

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        }     
    });
}

const observador = new IntersectionObserver(LoadImage, {
    root: null, 
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

observador.observe(sec0);

//Loader

window.onload = function(){
    var content = document.getElementById("c_loader");
    content.style.visibility = "hidden";
    content.style.opacity = "0";
}