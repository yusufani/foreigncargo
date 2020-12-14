

window.onscroll = function() 
{
    scrollFunction();
}

var loaders = document.getElementsByClassName('menua');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.backgroundColor = "rgba(47, 72, 88, 1)";
        document.getElementById("header").style.minHeight = "60px";
        document.getElementById("header").style.paddingTop = "0.6%";
        document.getElementById("header").style.paddingBottom = "0";   
        document.getElementById("logo-image").style.display = "none";  
        document.getElementById("logo-text").style.marginTop = "0";
        document.getElementById("logo-text").style.marginLeft = "120px";
        document.getElementById("nav-menu").style.marginTop = "0";
        ar = document.querySelectorAll(".sub-menu");
        ar.forEach(element => {
          element.style.backgroundColor=  "rgba(47, 72, 88, 1)";
        });
    }
    else {
        document.getElementById("header").style.backgroundColor = "rgba(29, 29, 29, 0.4)";
        document.getElementById("header").style.minHeight = "70px";
        document.getElementById("header").style.paddingTop = "0"; 
        document.getElementById("header").style.paddingBottom = "30px"; 
        document.getElementById("logo-image").style.display = "inline"; 
        document.getElementById("logo-text").style.marginTop = "-80px";
        document.getElementById("logo-text").style.marginLeft = "120px";  
        document.getElementById("nav-menu").style.marginTop = "40px";
        ar = document.querySelectorAll(".sub-menu");
        ar.forEach(element => {
          element.style.backgroundColor=  "rgba(29, 29, 29, 0.2)";
        });
    }
} 