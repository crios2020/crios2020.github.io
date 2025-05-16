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
    if(diaMes==3 && mes==5)                     hablar(" Feliz día del aprendiz, hoy es la noche de los oficios!")

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

function fp(){
    callar()
    hablar("Formación Profesional ")
    hablar("Es una modalidad de capacitación integral destinada a ofrecer las herramientas y habilidades necesarias para el desarrollo eficaz en el mundo del trabajo.")
    hablar("A través de los cursos, trayectos y capacitaciones laborales prepara, actualiza y capacita para que jóvenes y adultos puedan mejorar sus oportunidades de empleabilidad.")
    hablar("Nuestra oferta está orientada a temáticas como: Informática; Energía Eléctrica; Mecánica Automotriz; Construcciones; Hotelería y Gastronomía; Imagen y Sonido, Carpintería, Turismo, Construcciones, Textil, Estética, entre otros.")
    hablar("Toda la oferta es gratuita y cuenta con certificación oficial de validez nacional.")
}

function programacion(){
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

function estudiar(){
    callar()
        for(a=1; a<=16; a++){
        hablar(getEstudiosRandom())
    }
}

function bardear(){
    callar()
    for(a=1; a<=12; a++){
        hablar(getFraseRandom())
    }
}

const estudios = [
    "No me canso de decir que ",
    "No tengo más pretextos pero", 
    "Es Hora de admitir que ",
    "No hay mas manera de decir que ",
    "Lo siento debo decir que ",
    "No te enojes con migo si ",
    "Debes admitir que ",
    "Mi Madre me dijo que ", 
    "Tus amigos saben que ",
    "Me contaron que ",
    "A veces pienso en voz alta y ",
    "Muy seguido quiero decir que ",
    "Son muchos los motivos para contarte que ",
    "Por que ",
    "No debes mirarme así ",
    "¡Tu piensas lo mismo que yo! ",
    "¡Ni lo intentes! ",
    "No te asombres si te digo que ",
    "Vos sabés que ",
    "¿Que duda te cabe? ",
    "¡Veo que tenemos pocas ganas de trabajar! ",
    "Según mis registros encontré que ",
    "Según mis datos veo que ",
    "En mi base de datos encontré que ",
    "No creo que quieras escuchar que ",
    "No creo que quieras saber que ",
    "Te veo poco interesado en saber que ",
    "Es mucho muy importante saber que ",
    "Me gusta hablar sin pelos en la lengua ",
    "¿Te gustaría estudiar programación? ",
    "¿Té gustaría estudiar Java?",
    "¿Té gustaría estudiar Tester de Aplicaciónes?",
    "¿Té gustaría estudiar Javaescript?",
    "¿Té gustaría estudiar Paiton?",
    "¿Té gustaría estudiar Cyber Seguridad?",
    "¿Té gustaría estudiar Análisis de datos?",
    "¿Té gustaría estudiar Programación Web?",
    "Quieres ganar buena guita, estudia programación",
    "No levantes la perdiz! hay que estudiar programación",
    "¿Más claro? Echale agua",
    "No vendo humo ",
    "Vi luz y subí ",
    "No trabajes por el pancho y la coca, vení a estudiar programación",
    "Estudia programación, más vale tarde que nunca!",
    "Nada que perder, todo por ganar!",
    "La programación es divertida",
    "éstudia Marketing digital",
    "Te gustaría estudiar Marketing digital?",
    "éstudia Análisis de datos",
    "Te gustaría estudiar análisis de datos?",
    "Hacete conocer, estudiá marketing digital",
    "Convertite en un Bi Ai, estudia análisis de datos",
    "Domina la inteligencia de negocio con análisis de datos",
    "Tu vida pide alegría, por eso vení a estudiar con nosotros",
    "como te dije antes",
    "Deberías estudiar energías renovables",
    "éstudia energías renovables",
    "Contribuye con el medio ambiente, éstudia energías renovables",
    "Te falta un tornillo, imprimilo en 3 d, éstudia modelado 3 d",
    "éstudia modelado 3 d",
    "deberías estudiar modelado 3 d",
    "éstudia reparación de celulares",
    "deberías estudiar reparación de celulares",
    "potencia tus ventas con marketing digital",
    "querés ser famoso como yo, estudia marketing digital",
    "pronto inician los cursos de reparación de celulares",
    "sabemos que",
    "me alegra saber que",
    "éstudia instalación de alarmas de seguridad",
    "éstudia reparación de equipos de climatización",
    "éstudia reparación de aires acondicionado",
    "éstudia instalación de redes informáticas",
    "éstudia reparación de impresoras 3 D",
    "éstudia electricidad básica",
    "tenemos cursos con inserción laboral",
    "siempre es bueno estudiar",
    "mejora tus capacidades laborales, éstudia con nosotros",
    "no lo dudes, estudia con nosotros",
    "En formación profesional, brindamos capacitaciones gratuitas",
    "no sabes que hacer de tu vida? Vení a estudiar con nosotros",
    "te sentís solo? Vení a estudiar con nosotros",
    "tu amor te dejó? Vení a estudiar con nosotros",
    "estas sin trabajo? Vení a estudiar con nosotros",
    "estas depre? Vení a estudiar con nosotros y te alegramos el día",
    "dale a tu vida un cambio, vení a estudiar con nosotros",
    "ponele fin a los problemas, vení a estudiar con nosotros",
    "tu moto te deja a pata? estudia reparación de motos",
    "estas cansado de ir al mecánico? estudia mecánica del automotor",
    "tenés una moto vieja? estudia reparación de motos",
    "tenés un auto viejo? estudia mecánica del automotor",
    "Sabías que ",
    "tenemos capacitaciones en Informática; Energía Eléctrica; Mecánica Automotriz; Construcciones; Hotelería y Gastronomía; Imagen y Sonido, Carpintería, Turismo, Construcciones, Textil, Estética, entre otros.",
    "Toda nuestra oferta educativa es gratuita",
    "Toda nuestra oferta educativa cuenta con certificación oficial de validez nacional.",
    "Otro año sin trabajo? vení a estudiar con nostros!",
    "tenemos oferta educativa de administración ",
    "tenemos oferta educativa de informática ",
    "tenemos oferta educativa de comunicación y producción audiovisual",
    "tenemos oferta educativa de construcciones",
    "tenemos oferta educativa de cuero y calzado",
    "tenemos oferta educativa de Energia y dispositivos electricos",
    "tenemos oferta educativa de Estetica",
    "tenemos oferta educativa de Hotelería",
    "tenemos oferta educativa de Gastronomía",
    "tenemos oferta educativa de Mecánica automotriz",
    "tenemos oferta educativa de Turismo",
    "tenemos oferta educativa de Marroquineria",
    "potencia tu carrera y asegura tu futuro, estudia con nosotros!",
    "no sabes que hacer? estudia administración",
    "no sabes que hacer? estudia informática",
    "no sabes que hacer? estudia producción audiovisual",
    "no sabes que hacer? estudia construcciones",
    "no sabes que hacer? estudia Energia y dispositivos electricos",
    "no sabes que hacer? estudia Estetica",
    "no sabes que hacer? estudia Hotelería",
    "no sabes que hacer? estudia Gastronomía",
    "no sabes que hacer? estudia Mecánica automotriz",
    "no sabes que hacer? estudia Turismo",
    "no sabes que hacer? estudia Marroquineria",
    "Deberías estudiar administración",
    "Deberías estudiar informática",
    "Deberías estudiar producción audiovisual",
    "Deberías estudiar construcciones",
    "Deberías estudiar Energia y dispositivos electricos",
    "Deberías estudiar Estetica",
    "Deberías estudiar Hotelería",
    "Deberías estudiar Gastronomía",
    "Deberías estudiar Mecánica automotriz",
    "Deberías estudiar Turismo",
    "Deberías estudiar Marroquinería"
]

function getEstudiosRandom(){
    return estudios[getRandomInt(estudios.length-1)]
}