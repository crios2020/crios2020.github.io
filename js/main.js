function hola(){
    return "Hola soy Frida, estoy para ayudarte! "+getFraseAlegriaRandom()+" "+getFraseFridaRandom()+" "+getFraseAmorRandom()
}

function opa(){
    return "OPA, Asistente Personal Libre es el software que impulsa mi inteligencia artificial, desarrollado por Carlos Rios en javascript. "+getFraseFridaRandom()
}

function sordo(){
    return "Personas con hipoacusia pueden usar este software, gracias a mi interfase gráfica de lectura. "+getFraseAlegriaRandom()
}

function ciego(){
    return "Personas no videntes pueden usar este software, gracias a mi interfase de escucha y habla. "+getFraseCrecimientoPersonalRandom()
}

function hora() {
    return "Es la hora " + getHora() + " es " + getMomento() + " es momento de " + getMomentoAccion() + ". "+getFraseOptimistaRandom()
}

function fecha(){
    return "Hoy es "+getFecha()+" "+hoyEs()+" estamos en "+getEstacion()+", "+getEfemerides()+". "+getFraseFridaRandom()
}

function clima(){
    var temperatura=getTemperatura()
    var clima=getClima()
    var hora=new Date().getHours()
    
    var informe="La temperatura es "+temperatura+" grados centígrados, El clima es "+clima+", "

    if(temperatura<=0)                          informe+="Cuidado! Hace muchisimo frio, esta nevando! "
    if(temperatura>0 && temperatura<=5)         informe+="Hace frio, hay heladas! "
    if(temperatura>5 && temperatura<=10)        informe+="Está fresco! "
    if(temperatura>10 && temperatura<=15)       informe+="Está Templado! "
    if(temperatura>15 && temperatura<=20)       informe+="Está Agradable! "
    if(temperatura>20 && temperatura<=25)       informe+="Está cálido! "
    if(temperatura>25 && temperatura<=30)       informe+="Hace Calor! "
    if(temperatura>30 && temperatura<=35)       informe+="Hace Mucho Calor! "
    if(temperatura>35 && temperatura<=40)       informe+="Cuidado! Hace muchisimo Calor! "
    
    if(clima.includes("nube") )                                 informe+="En el cielo hay pocas nubes! "
    if(clima.includes("nubla") )                                informe+="El cielo esta Nublado! "
    if(clima.includes("claro") || clima.includes("limpi"))      informe+="El cielo esta despejado! "
    if(temperatura<24)                                          informe+="Salir abrigado! "
    if(clima.includes("lluv") || clima.includes("llov")){       
        informe+="Esta lloviendo!, Salir con paraguas! "
        if(hora>=15 && hora<=18 && temperatura<=18)             informe+="Está para hacer unas tortafritas! "
    }else                                                       informe+="No hay lluvias "

    if(clima.includes("nev") || clima.includes("niev"))         informe+="Esta Nevando! "

    if(clima.includes("nebli") || clima.includes("niebl"))      informe+="Hay Neblina! "

    if(clima.includes("gra"))                                   informe+="Alerta Granizada! "

    informe+=". "+getFraseAlegriaRandom()

    return informe
}

function donde(){

    //Usando el api limitada
    //var provincia=getProvincia().replace("Province","")
    //var pais=getPais()
    //var region=getRegion().replace("South America", "America del sur")

    /* Opción para hardcodear */
    //var provincia="Ciudad Autónoma de Buenos Aires"
    //var pais="Argentina"
    //var region="America del sur, tierra de carpinchos"

    //return "Nos encontramos en "+provincia+", país "+pais+", en la región de "+region+". "+getFraseCrecimientoPersonalRandom()

    //usando timeZone
    return "Nos encontramos en "+getZonaHoraria()+". "+getFraseCrecimientoPersonalRandom()
}

function fp(){
    var informe=""
    informe+="Formación Profesional "
    informe+="Es una modalidad de capacitación integral destinada a ofrecer las herramientas y habilidades necesarias para el desarrollo eficaz en el mundo del trabajo. "
    informe+="Toda la oferta es gratuita y con certificación oficial de validez nacional. "
    informe+=getFraseCrecimientoPersonalRandom()
    return informe
}

function trayectos(){
    var informe=""
    informe+="Nuestra oferta está orientada en: "
    informe+="Informática, Energía Eléctrica, Mecánica Automotriz, Construcciones, "
    informe+="Hotelería y Gastronomía; Imagen y Sonido, Carpintería, Turismo, "
    informe+="Textil, Estética, entre otros."
    informe+=getFraseCrecimientoPersonalRandom()
    return informe;
}

function programacion(){
    var informe=""
    informe+="¡Estudia con nosotros y formate profesionalmente como programador! "
    informe+="¡El trayecto de programación dura 364 horas reloj! "
    informe+="Los módulos del trayecto son: "
    informe+="Técnicas de programación, "
    informe+="Base de datos, "
    informe+="Programación orientada a objetos "
    informe+="y Relaciones laborales. "
    informe+=getFraseCrecimientoPersonalRandom()
    return informe;
}

function especialidades(){
    var informe=""
    informe+="Nuestras especialidades en programación son: "
    informe+="Programación WEB "
    informe+="Programación Segura y Cyberseguridad! "
    informe+="Programación de video juegos "
    informe+="Administración de base de datos "
    informe+=getFraseCrecimientoPersonalRandom()
    return informe;
}

function estudiar(){
    var informe=""
    for(a=1; a<=2; a++){
        informe+=getFraseConectoraRandom()+", "+getFraseEstudioRandom()+", "+getFraseCrecimientoPersonalRandom()+" "
    }
    return informe;
}

function requisitos(){
    var informe=""
    informe+="Para estudiar con nosotros debes : "
    informe+="Ser mayor de 18 años. "
    informe+="Contar con DNI o certificado de inicio de trámite. "
    informe+="Dependiendo del curso o trayecto formativo, se puede solicitar: "
    informe+="Nivel primario completo, "
    informe+="Ciclo básico del nivel secundario completo, "
    informe+="Nivel secundario completo. "
    informe+=getFraseCrecimientoPersonalRandom()
    return informe;
}

function bio(){
    var informe=""
    informe+="Fue una pintora mexicana conocida por sus obras llenas de simbolismo "
    informe+="y estilo único que combina el surrealismo con el folclore mexicano. "
    informe+="enfrentó numerosos desafíos de salud, que influyeron en su arte. "
    informe+="Su vida estuvo marcada por el sufrimiento físico y emocional. "
    informe+="Fue activista política y pareja del famoso muralista Diego Rivera. "
    return informe;
}

function hablame(){
    var informe=""
    for(a=1; a<=5; a++){
        informe+=getFraseFridaRandom()+" "
    }
    return informe;
}

function locura(){
    var informe=""
    for(a=1; a<=5; a++){
        informe+=getFraseLocuraRandom()+" "
    }
    return informe;
}

function alegria(){
    var informe=""
    for(a=1; a<=5; a++){
        informe+=getFraseAlegriaRandom()+" "
    }
    return informe;
}

function amor(){
    var informe=""
    for(a=1; a<=5; a++){
        informe+=getFraseAmorRandom()+" "
    }
    return informe;
}

function argentina(){
    var informe=""
    for(a=1; a<=8; a++){
        informe+=getFraseArgentinaRandom()+" "
    }
    return informe;
}

function carpincho(){
    var informe=""
    informe+="Los carpinchos o capibaras, son los roedores más grandes del mundo. "
    informe+="Viven en humedales en América del Sur, excelentes nadadores herbívoros "
    informe+="Pesan entre 35 y 66 kg y medir hasta 1.3 metros de largo, "
    informe+="muy sociales viven en grupos familiares, "
    informe+="conocidos por su tranquilidad, se les ve en compañía de otras especies, como aves y monos. "
    return informe;
}

function chiste(){
    return getChisteMaloRandom()
}

function color(color){
    panel.style.backgroundColor=color;
}

function creditos(){
    return "Diseño Gráfico: Romina Cabral. Programación: Carlos Rios"
}