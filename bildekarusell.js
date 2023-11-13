/*
Bruk av bildekarusell:
bildene må navngis slik: album#.jpg
eks:    tur1.jpg tur2.jpg tur3.jpg
        da skal album settes til "tur"
        og bilder settes til 3
Første bildet må begynne med 1, ikke 0
HTML setup:
            <div id="karusell" data-album="albumnavn" data-antall="antallbilder">
                <img src="" id="karusellbilde">
                <div id="progress"></div>
            </div>
*/

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
    bilde += 1
    if (bilde > bilder) bilde = 1
    karusellbilde.src = "bilder/"+album+""+bilde+".jpg"
    setTimeout(function(){
        progress.style.transition = delay-100+"ms linear"
        progress.style.width = "100%"
    },50)

}