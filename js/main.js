var search_button
window.addEventListener('DOMContentLoaded', (event) => {
    search_button = document.getElementById("search_button")


});
function change_visibility_sbutton(el){
    console.log(el)
    
    if (el === 0) {
        console.log("Görünmez")
         search_button.style.display = "none";  
    }else{
        console.log("Görünür")
        search_button.style.display = "inline";
    }

}