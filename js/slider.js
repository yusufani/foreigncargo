

var slider_infos = {
    "London DevOps Meetup":   ["../images/sliders/slide1.jpg","sadasdddddddddddddddddddddddddddddddddddddddddddd dolor sit amet consectetur adip"] , 
    "two":   ["image/sliders/slide1.jpg","2"],
    "three": ["image/sliders/slide1.jpg","3"],
    "four":  ["image/sliders/slide1.jpg","4"],
    "five":  ["image/sliders/slide1.jpg","5"]
}

current_idx = 0

window.addEventListener('DOMContentLoaded', (event) => {

    let slide_title = document.getElementById("imageHeader");
    var slide_text = document.getElementById("imageText");
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


    change_slide(current_idx)
    
    $('.prev').addEventListener(onclick,function() {
        change_slide(current_idx+=-1);
      })

    $('.next').addEventListener(onclick,function() {
    change_slide(current_idx+=1);
    })
});



