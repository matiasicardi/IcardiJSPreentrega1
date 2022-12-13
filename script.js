let opciones = ["piedra", "papel", "tijera"]
let jugador = 0
let victorias = 0
let derrotas = 0

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

function eleccion (jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = opciones[0] + "🥌"
    }else if(jugada == 2){
        resultado = opciones[1] + "🧻"
    }else if(jugada == 3){
        resultado = opciones[2] + "✂"
    }else{
        resultado ="MAL MONITO 🙊🙉🙈, espero tengas muchas fichas."
    } 
    return resultado
}


while (victorias < 3 && derrotas < 3) {
    
//JUGADOR
    
jugador = prompt("Por favor elige: 1 para Piedra, 2 para Papel y 3 para Tijera")
    

// PC
let pc = aleatorio(1, 3)

alert("Elegiste "+ eleccion(jugador))
alert("PC elegió "+ eleccion(pc))

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
 

