// Tres amigas (Patricia, Claudia y Marcela) son tenistas y deciden ir a jugar juntas. 
// Como son 3 y el tenis se juega entre 2 o entre 4, deciden jugar la modalidad conocida como rey 
// (o reina en este caso) de campo: juegan mini-partidos y la ganadora permanece en cancha, y 
// la perdedora espera su turno de nuevo. Al final del día, revisan los 
// mini-partidos que jugaron cada una de ellas con el siguiente resultado: Marcela jugó 21, 
// Patricia jugó 10, Claudia jugó 11.

function ultimoPartido(jugador1, jugador2, jugador3) {
    if (jugador1 === 21) {
      if (jugador2 < jugador3) {
        return "El último partido fue entre Patricia y Claudia";
      } else if (jugador2 > jugador3) {
        return "El último partido fue entre Patricia y Marcela";
      }
    } else if (jugador2 === 21) {
      if (jugador1 < jugador3) {
        return "El último partido fue entre Claudia y Marcela";
      } else if (jugador1 > jugador3) {
        return "El último partido fue entre Patricia y Marcela";
      }
    } else if (jugador3 === 21) {
      if (jugador1 < jugador2) {
        return "El último partido fue entre Claudia y Marcela";
      } else if (jugador1 > jugador2) {
        return "El último partido fue entre Patricia y Claudia";
      }
    }
    return "No se puede saber quién jugó el último partido.";
}
  
console.log(ultimoPartido(21, 10, 11)); // "El último partido fue entre Patricia y Claudia"
  

// Queremos formar un collar (completamente redondo y cerrado), pero resulta que tenemos la cadena dividida en cuatro partes cada 
// una de tres eslabones. Abrir un eslabón cuesta $250 pesos y cerrarlo otros $250. 
// Solo contamos con $1.500 pesos para realizar la operación. 
// ¿Cómo hacemos para formar el collar (usando todos los eslabones) y que alcance el dinero?

function collar() {
    //no solucionado
}


