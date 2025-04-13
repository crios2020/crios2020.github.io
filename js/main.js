function hola(){
    hablar("Hola soy OPA, un carpincho, asistente personal libre, estoy para ayudarte!")
    hablar("Soy un bot de inteligencia artificial, ")
    hablar("tengo información del tiempo y trayectos de estudios.")
    hablar("También estoy en proceso de desarrollo de aplicaciones de ayuda general")
}

function horaActual(){
    hablar(" es la hora "+getHora()+" es "+getMomento()+" es momento de "+getMomentoAccion()+", ")
}

function fechaActual(){
    hablar("Hoy es "+getFecha()+" "+hoyEs()+" estamos en "+getEstacion()+", ")
}

function climaActual(){
    temperatura=getTemperatura()
    clima=getClima()
    hablar("La temperatura es "+temperatura+" grados centígrados ")
    hablar("El clima es "+clima+" ")

    if(temperatura<=0)                          hablar("Cuidado! Hace muchisimo frio, esta nevando!")
    if(temperatura>0 && temperatura<=5)         hablar("Hace frio, hay heladas!")
    if(temperatura>5 && temperatura<=10)        hablar("Esta fresco!")
    if(temperatura>10 && temperatura<=15)       hablar("Esta Templado!")
    if(temperatura>15 && temperatura<=20)       hablar("Agradable!")
    if(temperatura>20 && temperatura<=25)       hablar("Esta cálido!")
    if(temperatura>25 && temperatura<=30)       hablar("Hace Calor!")
    if(temperatura>30 && temperatura<=35)       hablar("Hace Mucho Calor!")
    if(temperatura>35 && temperatura<=40)       hablar("Cuidado! Hace muchisimo Calor!")
    

    if(clima.includes("nube") )                                 hablar("En el cielo hay pocas nubes!")
    if(clima.includes("nubla") )                                hablar("El cielo esta Nublado!")
    if(clima.includes("claro") || clima.includes("limpi"))      hablar("El cielo esta despejado!")

    if(clima.includes("lluv") || clima.includes("llov"))        hablar("Esta lloviendo!")
    else                                                        hablar("No hay lluvias")

    if(clima.includes("nev") || clima.includes("niev"))         hablar("Esta Nevando!")

    if(clima.includes("nebli") || clima.includes("niebl"))      hablar("Hay Neblina!")

    if(clima.includes("gra"))                                   hablar("Alerta Granizada!")
}

function ubicacion(){
    hablar("nos encontramos en la ciudad de "+getCiudad()+" en "+getProvincia()+", país "+getPais()+", en la región de "+getContinente()+", ")
}

function tiempo(){
    ubicacion()
    fechaActual()
    horaActual()
    climaActual()
    //TODO Efemerides
}

function info(){
    hablar("Soy un bot de inteligencia artificial, fui programado en javascript")
    hablar("¡Estudia con nósotros y formate profesionalmente como programador!")
    hablar("¡El trayecto de programación dura 364 horas reloj!")
    hablar("Los módulos del trayecto son: ")
    hablar("Técnicas de programación, de 120 horas.")
    hablar("Base de datos 70 horas.")
    hablar("Programación orientada a objetos, de 150 horas.")
    hablar("Relaciones laborales 24 horas.")
    hablar("También tenemos especialización en video juegos, programación web, programación segura y cyberseguridad, y administración de base de datos.")
}

function bardear(){
    for(a=1; a<=10; a++){
        hablar(getFraseRandom())
    }
}