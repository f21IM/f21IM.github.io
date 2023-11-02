const karusell = document.getElementById("karusell")
const bilder = 4

let bilde = 1
let timer = setInterval(countDown,3500)

function countDown(){
    bilde += 1
    if (bilde > bilder) bilde = 1
    karusell.src = "bilder/bilde"+bilde+".jpg"
}


