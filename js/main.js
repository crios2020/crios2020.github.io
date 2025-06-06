function hola(){
    callar()
    hablar("Hola soy OPA, un carpincho, asistente personal libre, estoy para ayudarte!")
    hablar("Soy un bot de inteligencia artificial, ")
    hablar("tengo información del tiempo y trayectos de estudios.")
    hablar("Fui programado en java script por alumnos de formación profesional, ")
    hablar("Bienvenidos a la noche de los oficios!")
}

function horaActual(){
    callar()
    hablar("en "+getZonaHoraria()+" es la hora "+getHora()+" es "+getMomento()+" es momento de "+getMomentoAccion()+", ")
}

function fechaHoraActual(){
    callar()
    hablar("en "+getZonaHoraria()+" es la hora "+getHora()+" es "+getMomento()+" es momento de "+getMomentoAccion()+", ")
    hablar("Hoy es "+getFecha()+" "+hoyEs()+" estamos en "+getEstacion()+", ")
    efemerides()

    //temperatura=getTemperatura()
    //clima=getClima()
    hora=new Date().getHours()

    /* Opción para hardcodear */
    temperatura=11
    //sensacionTermica=20
    clima="algo nublado"

    hablar(" La temperatura es "+temperatura+" grados centígrados ")
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
    if(temperatura<26) hablar("Salir abrigado! ")
    if(clima.includes("lluv") || clima.includes("llov")){
        hablar("Esta lloviendo!, Salir con paraguas!")
        if(hora>=15 && hora<=18 && temperatura<=18)             hablar("Esta para hacer unas tortafritas!")
    }else                                                       hablar("No hay lluvias")

    if(clima.includes("nev") || clima.includes("niev"))         hablar("Esta Nevando!")

    if(clima.includes("nebli") || clima.includes("niebl"))      hablar("Hay Neblina!")

    if(clima.includes("gra"))                                   hablar("Alerta Granizada!")
}

function ubicacion(){
    callar()
    //provincia=getProvincia()
    //pais=getPais()
    //region=getRegion()

    /* Opción para hardcodear */
    provincia="Ciudad Autónoma de Buenos Aires"
    pais="Argentina"
    region="America del sur, tierra de carpinchos"

    hablar("nos encontramos en "+provincia+", país "+pais+", en la región de "+region+", ")
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
    if(diaMes==9 && mes==6)                     hablar(" Hoy es el día de la independencia en argentina !! ")

    //día de san martin
    if(diaMes==17 && mes==7)                    hablar(" Hoy recordamos a nuestro padre de la patria, el general Don Jose de San Martín!! ")

    //día de la primavera & estudiante
    if(diaMes==21 && mes==8)                    hablar(" Hoy es el día del estudiante y del perfumista!! ")

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

    //día de la maestra jardinera
    if(diaMes==28 && mes==4)                    hablar(" Hoy es el día de la maestra jardinera!! ")

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
    hablar("Nuestra oferta está orientada en: ")
    hablar("Informática; Energía Eléctrica; Mecánica Automotriz; Construcciones; ")
    hablar("Hotelería y Gastronomía; Imagen y Sonido, Carpintería, Turismo, Textil, Estética, entre otros.")
    hablar("Toda la oferta es gratuita y con certificación oficial de validez nacional.")
}

function programacion(){
    callar()
    hablar("¡Estudia con nosotros y formate profesionalmente como programador!")
    hablar("¡El trayecto de programación dura 364 horas reloj!")
    hablar("Los módulos del trayecto son: ")
    hablar("Técnicas de programación, ")
    hablar("Base de datos, ")
    hablar("Programación orientada a objetos ")
    hablar("y Relaciones laborales.")
}

function especialidades(){
    callar()
    hablar("Nuestras especialidades en programación son: ")
    hablar("Programación WEB")
    hablar("Programación Segura y Cyberseguridad!")
    hablar("Programación de video juegos")
    hablar("Administración de base de datos")
}

function estudiar(){
    callar()
    for(a=1; a<=10; a++){
        hablar(getEstudiosRandom())
    }
}

function bardear(){
    callar()
    for(a=1; a<=10; a++){
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
    "estudia Marketing digital",
    "Te gustaría estudiar Marketing digital?",
    "estudia Análisis de datos",
    "Te gustaría estudiar análisis de datos?",
    "Hacete conocer, estudiá marketing digital",
    "Convertite en un Bi Ai, estudia análisis de datos",
    "Domina la inteligencia de negocio con análisis de datos",
    "Tu vida pide alegría, por eso vení a estudiar con nosotros",
    "como te dije antes",
    "Deberías estudiar energías renovables",
    "estudia energías renovables",
    "Contribuye con el medio ambiente, estudia energías renovables",
    "Te falta un tornillo, imprimilo en 3 d, estudia modelado 3 d",
    "estudia modelado 3 d",
    "deberías estudiar modelado 3 d",
    "estudia reparación de celulares",
    "deberías estudiar reparación de celulares",
    "potencia tus ventas con marketing digital",
    "querés ser famoso como yo, estudia marketing digital",
    "pronto inician los cursos de reparación de celulares",
    "sabemos que",
    "se te rompió la pantalla del celular? Estudia reparación de celulares",
    "se astilló la pantalla del celular? Estudia reparación de celulares",
    "me alegra saber que",
    "estudia instalación de alarmas de seguridad",
    "estudia reparación de equipos de climatización",
    "estudia reparación de aires acondicionado",
    "estudia instalación de redes informáticas",
    "estudia reparación de impresoras 3 D",
    "estudia electricidad básica",
    "tenemos cursos con inserción laboral",
    "Estas aburrido en tu casa? estudia instalación de alarmas de seguridad",
    "Estas aburrido en tu casa? estudia reparación de equipos de climatización",
    "Estas aburrido en tu casa? estudia reparación de aires acondicionado",
    "Estas aburrido en tu casa? estudia instalación de redes informáticas",
    "Estas aburrido en tu casa? estudia reparación de impresoras 3 D",
    "Estas aburrido en tu casa? estudia electricidad básica",
    "Estas aburrido en tu casa? ven a estudiar con nosotros",
    "tenemos cursos con inserción laboral",
    "siempre es bueno estudiar",
    "mejora tus capacidades laborales, estudia con nosotros",
    "no lo dudes, estudia con nosotros",
    "En formación profesional, brindamos capacitaciones gratuitas",
    "no sabes que hacer de tu vida? Vení a estudiar con nosotros",
    "te sentís solo? Vení a estudiar con nosotros",
    "tu amor te dejó? Vení a estudiar con nosotros",
    "te peliaste con la tóxica? Vení a estudiar con nosotros",
    "estas sin trabajo? Vení a estudiar con nosotros",
    "estas depre? Vení a estudiar con nosotros y te alegramos el día",
    "dale a tu vida un cambio, vení a estudiar con nosotros",
    "ponele fin a los problemas, vení a estudiar con nosotros",
    "tu moto te deja a pata? estudia reparación de motos",
    "estas cansado de ir al mecánico? estudia mecánica del automotor",
    "tenés una moto vieja? estudia reparación de motos",
    "tenés un auto viejo? estudia mecánica del automotor",
    "Sabías que ",
    "Toda nuestra oferta educativa es gratuita",
    "Toda nuestra oferta educativa cuenta con certificación oficial de validez nacional.",
    "Otro año sin trabajo? vení a estudiar con nostros!",
    "tenemos oferta educativa de administración ",
    "tenemos oferta educativa de informática ",
    "tenemos oferta educativa de comunicación y producción audiovisual",
    "tenemos oferta educativa de construcciones",
    "tenemos oferta educativa de cuero y calzado",
    "tenemos oferta educativa de Energía y dispositivos electricos",
    "tenemos oferta educativa de Estetica",
    "tenemos oferta educativa de Hotelería",
    "tenemos oferta educativa de Gastronomía",
    "tenemos oferta educativa de Mecánica automotriz",
    "tenemos oferta educativa de Turismo",
    "tenemos oferta educativa de Marroquinería",
    "tenemos oferta educativa de Carpintería",
    "potencia tu carrera y asegura tu futuro, estudia con nosotros!",
    "no sabes que hacer? estudia administración",
    "no sabes que hacer? estudia informática",
    "no sabes que hacer? estudia producción audiovisual",
    "no sabes que hacer? estudia construcciones",
    "no sabes que hacer? estudia Energía y dispositivos electricos",
    "no sabes que hacer? estudia Estetica",
    "no sabes que hacer? estudia Hotelería",
    "no sabes que hacer? estudia Gastronomía",
    "no sabes que hacer? estudia Mecánica automotriz",
    "no sabes que hacer? estudia Turismo",
    "no sabes que hacer? estudia Marroquinería",
    "no sabes que hacer? estudia Carpintería",
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
    "te peliaste con la tóxica? Vení a estudiar administración",
    "te peliaste con la tóxica? Vení a estudiar informática",
    "te peliaste con la tóxica? Vení a estudiar producción audiovisual",
    "te peliaste con la tóxica? Vení a estudiar construcciones",
    "te peliaste con la tóxica? Vení a estudiar Energia y dispositivos electricos",
    "te peliaste con la tóxica? Vení a estudiar Estetica",
    "te peliaste con la tóxica? Vení a estudiar Hotelería",
    "te peliaste con la tóxica? Vení a estudiar Gastronomía",
    "te peliaste con la tóxica? Vení a estudiar Mecánica automotriz",
    "te peliaste con la tóxica? Vení a estudiar Turismo",
    "tu amor te dejó? Vení a estudiar administración",
    "tu amor te dejó? Vení a estudiar informática",
    "tu amor te dejó? Vení a estudiar producción audiovisual",
    "tu amor te dejó? Vení a estudiar construcciones",
    "tu amor te dejó? Vení a estudiar Energia y dispositivos electricos",
    "tu amor te dejó? Vení a estudiar Estetica",
    "tu amor te dejó? Vení a estudiar Hotelería",
    "tu amor te dejó? Vení a estudiar Gastronomía",
    "tu amor te dejó? Vení a estudiar Mecánica automotriz",
    "tu amor te dejó? Vení a estudiar Turismo",
    "nada mejor que aprender oficios",
    "querés un consejo? aprende un oficio",
    "querés estudiar en forma gratuita y con certificado oficial?",
    "sabías que podes estudiar en forma gratuita con certificado oficial?",
    "Conoces nuestros centros de formación profesional?",
    "Cual será tu próximo oficio?",
    "construye tu futuro!",
    "Pensaste que oficio deseas aprender?",
    "Cual es tu oficio preferido?",
    "Al que trabaja Díos lo ayuda, pero al que estudia Díos lo Ama",
    "Queres un oficio, pensate en estudiar para trabajar en la construcción",
    "Pensaste en estudiar carpintería",
    "Queres estudiar construcciones con certificado oficial?",
    "veni a formación profesional!",
    "Tu futuro comienza hoy, no mañana. ¡Invierte en tu educación!",
    "Cada lección aprendida es un paso más hacia tus sueños.",
    "El conocimiento es la llave que abre las puertas de las oportunidades.",
    "No te limites. Con esfuerzo y dedicación, puedes alcanzar cualquier meta.",
    "El éxito no es un destino, es un viaje. ¡Únete a nosotros en este camino!",
    "Cada día es una nueva oportunidad para aprender y crecer.",
    "La formación profesional te dará las herramientas para construir tu futuro.",
    "Elige ser la mejor versión de ti mismo. ¡Comienza tu viaje educativo hoy!",
    "La educación transforma vidas. Sé parte de esa transformación.",
    "Cree en ti mismo y en tus capacidades. ¡El futuro es tuyo para conquistarlo!",
    "Domina la tecnología y abre las puertas a un mundo de oportunidades.",
    "Cada código de programación que escribes es un paso hacia el futuro digital.",
    "Conviértete en el arquitecto de la energía que impulsa el mundo.",
    "La electricidad impulsa el progreso. ¡Sé parte de esa revolución!",
    "Haz que cada motor ruede con tu conocimiento y habilidades.",
    "Conviértete en el experto que devuelve la vida a cada vehículo.",
    "Construye tu futuro ladrillo a ladrillo. ¡El cielo es el límite!",
    "Cada edificio que tocas es un legado que dejas.",
    "Crea experiencias inolvidables a través de la hospitalidad.",
    "La cocina es un arte. ¡Conviértete en un maestro de los sabores!",
    "Captura momentos y cuenta historias a través de tu lente.",
    "Tu creatividad puede dar vida a imágenes y sonidos inolvidables.",
    "Transforma la madera en obras maestras con tus propias manos.",
    "Cada herramienta es un aliado en la creación de tu arte.",
    "Descubre el mundo y lleva a otros en esa aventura.",
    "El turismo es la puerta a nuevas culturas y experiencias.",
    "Teje tus sueños con cada hilo que utilizas.",
    "La moda es una forma de expresión. ¡Dale vida a tus ideas!",
    "Realza la belleza y confianza de las personas con tu talento.",
    "Cada transformación es una obra de arte en manos expertas.",
    "Cada oficio es una oportunidad para dejar huella en el mundo.",
    "La pasión y la dedicación son la clave para el éxito en cualquier profesión.",
    "Invierte en tu educación y cosecha los frutos de tu esfuerzo.",
    "La práctica y el aprendizaje constante son tus mejores aliados.",
    "Sé el cambio que deseas ver en tu sector.",
    "Tu futuro está en tus manos. ¡Hazlo brillar!",
    "Cada día es una nueva oportunidad para aprender algo nuevo.",
    "La formación profesional es el primer paso hacia tus sueños.",
    "El trabajo duro y la perseverancia siempre dan frutos.",
    "Cree en ti mismo y en el impacto que puedes tener en el mundo.",
    "Cada oficio es una puerta abierta a nuevas oportunidades.",
    "Aprender un oficio es invertir en tu futuro y en tus sueños.",
    "La habilidad es el mejor camino hacia la independencia y el éxito.",
    "Con cada nuevo conocimiento, te vuelves más valioso en el mundo laboral.",
    "Transforma tus pasiones en habilidades y tus habilidades en una carrera.",
    "No hay límites para lo que puedes lograr si te dedicas a aprender.",
    "Cada día es una nueva oportunidad para dominar un nuevo oficio.",
    "La maestría en un oficio es el resultado de la práctica y la perseverancia.",
    "Cree en ti mismo: puedes convertirte en un experto en cualquier área.",
    "El aprendizaje nunca termina; cada nuevo oficio es un nuevo comienzo.",
    "El conocimiento es el primer paso hacia el crecimiento personal y profesional.",
    "Cada libro que lees es una oportunidad para expandir tu mente y tu vida.",
    "Invertir en ti mismo es la mejor decisión que puedes tomar para tu futuro.",
    "El aprendizaje constante es la clave para desbloquear tu verdadero potencial.",
    "El crecimiento personal comienza cuando te atreves a salir de tu zona de confort.",
    "Desafía tus límites y descubrirás la grandeza que llevas dentro.",
    "Cada día es una nueva oportunidad para aprender y crecer.",
    "El éxito se construye sobre la base del conocimiento y la autoexploración.",
    "Tu mente es un jardín; cultiva el conocimiento y cosecharás sabiduría.",
    "No tenes un mango? nuestra oferta es gratuita",
    "No tenes un peso? nuestra oferta es gratuita",
    "No tenes plata? nuestra oferta es gratuita",
    "No esta muerto quien pelea",
    "El verdadero crecimiento personal comienza cuando te comprometes a mejorar cada día."
]

function getEstudiosRandom(){
    return estudios[getRandomInt(estudios.length-1)]
}
