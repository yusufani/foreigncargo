
let slide_title,slide_text
var slider_infos = {
    "London DevOps Meetup":   ["../images/sliders/slide1.jpg","sadasdddddddddddddddddddddddddddddddddddddddddddd dolor sit amet consectetur adip"] , 
    "two":   ["../images/sliders/slide2.jpg","2"],
    "three": ["../images/sliders/slide3.jpg","3"],
    "four":  ["../images/sliders/slide4.jpg","4"],
    "five":  ["../images/sliders/slide5.jpg","5"]
}

current_idx = 0

window.addEventListener('DOMContentLoaded', (event) => {

    slide_title = document.getElementById("imageHeader");
    slide_text = document.getElementById("imageText");



    change_slide(current_idx)
    

});

function change_slide(idx){
    keys = Object.keys(slider_infos)
    key = keys[idx % keys.length];
    console.log( document.getElementById("imageHeader"))
    console.log(slide_title)
    slide_title.innerHTML="<pre>"
    i = 1
    key.split(" ").forEach(element => {
        slide_title.innerHTML+="&nbsp&nbsp".repeat(i*i)
        slide_title.innerHTML+=element+"<br> "
        i+=1
    });
    slide_title.innerHTML+="</pre>"
    
    slide_text.textContent=slider_infos[key][1]
    $('.imageSlide').css('background', 'url("'+slider_infos[key][0]+'") no-repeat -1600px -460px');
    
    
}


function plusSlides(n) {
    console.log("sa")
    change_slide(current_idx += n);
  }