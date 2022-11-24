
let victorias = 0
let derrotas = 0

while (victorias < 3 && derrotas < 3) {
    
//JUGADOR
let jugador = 0
jugador = prompt("Por favor elige: 1 para piedra, 2 para papel y 3 para tijera")

if(jugador == 1){
    alert("Elegiste 🥌")
}else if(jugador == 2){
    alert("Elegiste 🧻")
}else if(jugador == 3){
    alert("Elegiste ✂")
}else{
alert("De 1 a 3 MONITO 🙊🙉🙈, espero tengas muchas fichas.")
}

// PC
let min = 1
let max = 3
numeroAleatorio = Math.floor(Math.random()*(max-min+1)+1)
let pc = numeroAleatorio

if(pc == 1){
    alert("PC elige 🥌")
}else if(pc == 2){
    alert("PC elige 🧻")
}else if(pc == 3){
    alert("PC elige ✂")
}

//COMBATE

if(jugador == pc){
    alert("Empate, juega de nuevo")
}else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    victorias = victorias +1
    alert("Ganaste, felicitaciones 👌")
}else{
    derrotas = derrotas + 1
    alert("Perdiste, mejor suerte la próxima")
}
}
alert("GAME OVER, INSERT COIN")