const respuestasElegantes = [
    "La belleza es un estado de ánimo, no un insulto.",
    "Tus palabras no me definen, son solo ruido.",
    "La vida es demasiado corta para tomar en serio la ignorancia.",
    "Los ataques son solo reflejos de tu propia inseguridad.",
    "No me ofendes, me inspiras a ser más fuerte.",
    "Las palabras pueden doler, pero mi espíritu es indestructible.",
    "Dicen más de ti que de mí.",
    "El arte es mi respuesta a tu falta de entendimiento.",
    "No necesito tu aprobación para brillar.",
    "Tu veneno solo me hace más resistente.",
    "Soy una mujer hecha de pasiones, no de ofensas.",
    "No tengo tiempo para tu negatividad.",
    "Mis raíces son más profundas que tus insultos.",
    "Prefiero ser auténtica que complacerte.",
    "No me toca el desprecio, me abraza la libertad.",
    "La crítica es solo el eco de tus propias frustraciones.",
    "Los insultos hablan mal de Ti, no de Mi.",
    "No debes decir esas palabras.",
    "Debes ser más educado con una Dama!"
]

function respuestaEleganteRandom(){
    return respuestasElegantes[getRandomInt(respuestasElegantes.length-1)]
}