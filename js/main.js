var search_button
window.addEventListener('DOMContentLoaded', (event) => {
    search_button = document.getElementById("search_button")
    $("#search_button").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            console.log(document.location)
            //document.location.href = document.location.origin+"/htmls/tracking.html?"+search_button.value;
        }
    });
});



function change_visibility_sbutton(el){
    
    if (el === 0) {
         search_button.style.visibility = "hidden";  
    }else{
        search_button.style.visibility = "visible";
    }

}