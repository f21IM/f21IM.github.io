const karusell = document.getElementById("karusell")
const karusellbilde = document.getElementById("karusellbilde")
const bilder = karusell.getAttribute("data-antall")
const album = karusell.getAttribute("data-album")
const progress = document.getElementById("progress")
const delay = 4000

let bilde = 0
let timer = setInterval(countDown,delay)

progress.style.transition = delay+"ms"
countDown()
function countDown(){
    progress.style.transition = "0ms linear"
    progress.style.width = "0%"
    setTimeout(function(){
        bilde += 1
        if (bilde > bilder) bilde = 1
        karusellbilde.src = "bilder/"+album+""+bilde+".jpg"
        progress.style.transition = delay-100+"ms linear"
        progress.style.width = "100%"
    },50)

}
