window.addEventListener('DOMContentLoaded', (event) => {
    
    input_text = document.getElementById("input_text")
    console.log(document.location.href)
    document.location.href
    id = String(document.location.href).split("?")[1]
    input_text.value=id
});
