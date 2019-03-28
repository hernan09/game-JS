let footer = document.querySelector('#base')
let header = document.querySelector('header')
let logo = document.querySelector('#logo')
let arrowLeft = document.querySelector('#izquierda')
let arrowRhigt = document.querySelector('#derecha')
let shot = document.querySelector('#shot')
let base2 = document.querySelector('#base2')
let vs = document.querySelector('#vs')
let player1 = document.querySelector('#pimg1')
let player2 = document.querySelector('#pimg2')
let array = ["dino.png", "dragon.png", "grifo.png"]
let badge1 = document.querySelector('#badge1')
let badge2 = document.querySelector('#badge2')
let cartelRed = document.querySelector('#red')
let cartelYellow = document.querySelector('#yellow')
let cartelWhite = document.querySelector('#white')
let conjuntoCajas = document.querySelector('#conjuntospan')





function start() {
    logo.addEventListener("click", e => {
        header.style.display = "none"
        footer.style.display = "block"
        base2.style.display = "block"


    })
}
start()

function fhigt() {
    shot.addEventListener("click", e => {
        let cont = Math.floor(Math.random() * 3)
        let cont2 = Math.floor(Math.random() * 3)
        vs.style.display = "block"
        player1.style.display = "block"
        player2.style.display = "block"

        player1.src = array[cont]
        player2.src = array[cont2]

        victoria(cont, cont2)

    })


}
fhigt()

function victoria(cont, cont2) {
    if (cont == 1 && cont2 == 0) {
        badge1.innerHTML = "player 1 to win"
        badge2.innerHTML = "player 2 to lose"
        badge1.style.animationPlayState = "running"
        cartelRed.style.color = "black"
        cartelRed.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else if (cont == 0 && cont2 == 2) {

        badge1.innerHTML = "player 1 to win"
        badge2.innerHTML = "player 2 to lose"
        badge1.style.animationPlayState = "running"
        cartelYellow.style.color = "black"
        cartelYellow.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else if (cont == 2 && cont2 == 1) {
        badge1.innerHTML = "player 1 to win"
        badge2.innerHTML = "player 2 to lose"
        badge1.style.animationPlayState = "running"
        cartelWhite.style.color = "black"
        cartelWhite.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else if (cont2 == 1 && cont == 0) {
        badge1.innerHTML = "player 1 to lose"
        badge2.innerHTML = "player 2 to win"
        badge2.style.animationPlayState = "running"
        cartelRed.style.color = "black"
        cartelRed.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else if (cont2 == 0 && cont == 2) {
        badge1.innerHTML = "player 1 to lose"
        badge2.innerHTML = "player 2 to win"
        badge2.style.animationPlayState = "running"
        cartelYellow.style.color = "black"
        cartelYellow.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else if (cont2 == 2 && cont == 1) {
        badge1.innerHTML = "player 1 to lose"
        badge2.innerHTML = "player 2 to win"
        badge2.style.animationPlayState = "running"
        cartelWhite.style.color = "black"
        cartelWhite.style.backgroundColor = "white"
        shot.style.display = "none"
        conjuntoCajas.style.animationPlayState = "running"


        setTimeout(reiniciar, 4000)
    } else {
        badge1.innerHTML = "tie"
        badge2.innerHTML = "tie"
        badge2.style.animationPlayState = "running"
        badge1.style.animationPlayState = "running"
    }
}

function reiniciar() {
    let a = document.createElement("a")
    a.href = "index.html"
    document.body.append(a)
    a.click()
    document.body.remove(a)
}