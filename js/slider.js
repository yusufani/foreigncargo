
let slide_title,slide_text
path = String(document.location.href )
path= path.substr(0, path.lastIndexOf("/") + 1);
var slider_infos = {
    "Sea Trade Conf.":   [path+"/images/sliders/slide1.jpg","As a Foreign Cargo we participated in the annual Sea Trade Conference and we won the best logistic firm award. Thanks for you dear customers for supporting us. We couldn't win it without you so we want to celebrate this with you. If you vote for us check your sms folder and find your special offer."] , 
    "Our New Fleet":     [path+"/images/sliders/slide2.jpg","With the announcement of the Boing cargo planes. We purchase 20 new planes. They will be on use in one month and some lucky customers will recieve a prize with their cargo, if their cargo is transported by the new Boing planes. If you will be one of the lucky winners, dont forget to send us a picture of your gift."],
    "About Corona Virus": [path+"/images/sliders/slide3.jpg","Lately all of us are face to face with a epidemical crisis. Of course our first priority is your health and safety, so because of that we made some decisions to ensure this. Thats why there can be some possible delays for your shipments and cargo. We are trully sorry for that. But please dont forget we are taking these precautions for your own health and safety."],
    "We Are Hiring":  [path+"/images/sliders/slide4.jpg","We are hiring for our new operation center in Berlin. If you want to work with us please fill the employment form and send it to our public relations office via e-mail. After that we will call you for an interview. We are looking forward to meeting with all of you. Good luck! Stay healthy and safe."],
}

current_idx = 1

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
    $('.imageSlide').css('background', 'url("'+slider_infos[key][0]+'") no-repeat   ');
    $('.imageSlide').css('background-size', 'cover');
}


function plusSlides(n) {
    change_slide(current_idx += n);
  }