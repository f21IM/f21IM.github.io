const karusell = document.getElementById("karusell")
const bilder = karusell.getAttribute("data-antall")
const album = karusell.getAttribute("data-album")

let bilde = 1
let timer = setInterval(countDown,3500)

function countDown(){
    bilde += 1
    if (bilde > bilder) bilde = 1
    karusell.src = "bilder/"+album+""+bilde+".jpg"
}


