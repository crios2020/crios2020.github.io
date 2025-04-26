function hola(){
    callar()
    hablar("Hola soy OPA, un carpincho, asistente personal libre, estoy para ayudarte!")
    hablar("Soy un bot de inteligencia artificial, ")
    hablar("tengo información del tiempo y trayectos de estudios.")
    hablar("También estoy en proceso de desarrollo de aplicaciones de ayuda general")
}

function horaActual(){
    callar()
    hablar(" es la hora "+getHora()+" es "+getMomento()+" es momento de "+getMomentoAccion()+", ")
}

function fechaActual(){
    callar()
    hablar("Hoy es "+getFecha()+" "+hoyEs()+" estamos en "+getEstacion()+", ")
    efemerides()
}

function climaActual(){
    callar()
    temperatura=getTemperatura()
    clima=getClima()
    hablar("La temperatura es "+temperatura+" grados centígrados ")
    hablar("El clima es "+clima+" ")

    if(temperatura<=0)                          hablar("Cuidado! Hace muchisimo frio, esta nevando!")
    if(temperatura>0 && temperatura<=5)         hablar("Hace frio, hay heladas!")
    if(temperatura>5 && temperatura<=10)        hablar("Está fresco!")
    if(temperatura>10 && temperatura<=15)       hablar("Está Templado!")
    if(temperatura>15 && temperatura<=20)       hablar("Está Agradable!")
    if(temperatura>20 && temperatura<=25)       hablar("Está cálido!")
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
    callar()
    hablar("nos encontramos en "+getProvincia()+", país "+getPais()+", en la región de "+getRegion()+", ")
}

function efemerides(){
    fecha=new Date()
    diaMes=fecha.getDate()
    mes=fecha.getMonth()

    //inicio de mes
    if(diaMes==1)                               hablar(" Un nuevo mes inicia!! ")

    //día de ñoquis
    if(diaMes==29)                              hablar(" hoy es 29, hoy es día de ñoquis!! ")

    //día de la mujer
    if(diaMes==8 && mes==2)                     hablar(" Hoy es el día de la mujer!! ") 

    //día del trabajador
    if(diaMes==1 && mes==4)                     hablar(" Hoy es el día del trabajador!! ")    

    //día de la felicidad
    if(diaMes==20 && mes==2)                    hablar(" Hoy es el día internacional de la felicidad!! ") 

    //día del programador
    if(diaMes==13 && mes==8)                    hablar(" Hoy es el día del programador!! ")

    //cumpleaños del programador
    if(diaMes==2 && mes==1)                     hablar(" Hoy es el cumpleaños de mi programador!! ")

    //día de la patria
    if(diaMes==25 && mes==4)                    hablar(" Hoy es el día de la patria en argentina!! ")

    //día de la independencia
    if(diaMes==6 && mes==5)                     hablar(" Hoy es el día de la independencia en argentina !! ")

    //día de san martin
    if(diaMes==17 && mes==7)                    hablar(" Hoy recordamos a nuestro padre de la patria, el general Don Jose de San Martín!! ")

    //día de la primavera & estudiante
    if(diaMes==21 && mes==8)                    hablar(" Hoy es el día del estudiante y del perfumista, feliz cumpleaños!! ")

    //día de san patricio
    if(diaMes==17 && mes==3)                    hablar(" Feliz San Patricio, a tomar cerveza!! ")

    //día del aprendiz
    if(diaMes==3 && mes==5)                     hablar(" Feliz día del aprendiz")

    //día del mecánico 
    if(diaMes==24 && mes==1)                    hablar(" Feliz día del mecánico!! ")

    //día de la secretaria
    if(diaMes==4 && mes==8)                     hablar(" Feliz día de la secretaria!! ")

    //día del ferroviario
    if(diaMes==1 && mes==2)                     hablar(" Hoy es el día del ferroviario!! ")

    //día de la educación técnica
    if(diaMes==15 && mes==10)                   hablar(" Hoy es el día de la educación técnica!! ")

    //día del maestro
    if(diaMes==11 && mes==8)                    hablar(" Hoy es el día del maestro!! ")

    //Navidad
    if(diaMes==24 && mes==11)                   hablar(" Feliz noche buena!!! ")
    if(diaMes==25 && mes==11)                   hablar(" Feliz navidad!!! ")

    //Feliz año nuevo!
    if(diaMes==31 && mes==11)                   hablar(" Hoy es Fin de Año!! ")
    if(diaMes==1 && mes==0)                     hablar(" Feliz año nuevo!! ")


}

function info(){
    callar()
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
    callar()
    for(a=1; a<=10; a++){
        hablar(getFraseRandom())
    }
}