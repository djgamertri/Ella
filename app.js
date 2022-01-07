//observer

const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");

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

observador.observe(sec1);
observador.observe(sec2);
observador.observe(sec3);
observador.observe(sec4);
observador.observe(sec5);

//Loader

window.onload = function(){
    var content = document.getElementById("c_loader");
    content.style.visibility = "hidden";
    content.style.opacity = "0";
}