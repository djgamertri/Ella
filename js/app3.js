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

//Loader

window.onload = function(){
    var content = document.getElementById("c_loader");
    content.style.visibility = "hidden";
    content.style.opacity = "0";
}