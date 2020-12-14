var search_button
window.addEventListener('DOMContentLoaded', (event) => {
    search_button = document.getElementById("search_button")
    $("#search_button").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            //console.log(document.location)
            path = String(document.location.href )
            fields = path.split("/")
            new_path = fields[0]+"/"+fields[1]+"/"+fields[2]
            if (fields[3] == "foreigncargo" ) {
                new_path+="/"+fields[3]
            }
            new_path+="/htmls/tracking.html?"+search_button.value;
            document.location.href = new_path;
            //var afterWith = path.substr(0, path.lastIndexOf("/") + 1);
            //document.location.href = afterWith+"/htmls/tracking.html?"+search_button.value;
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