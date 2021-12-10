//observer

const sec0 = document.getElementById("sec0");
const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");

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

observador.observe(sec0);
observador.observe(sec1);
observador.observe(sec2);
observador.observe(sec3);