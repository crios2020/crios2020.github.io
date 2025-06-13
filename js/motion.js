/*

    docs de ayuda

    ejecución de funciones en forma dinamica
    https://www.google.com/search?q=necesito+ejecutar+dinamicamente+una+funcion+en+js+teniendo+el+nombre+de+la+funci%C3%B3n+en+un+string&ie=UTF-8

    collections en js
    https://www.google.com/search?q=existen+collection+en+js+como+en+java%3F&ie=UTF-8


    clases en js
    https://www.google.com/search?q=clases+en+js+constructores+getter+%26+setter&ie=UTF-8


*/

class Motion {
    constructor(value, text, llaves) {
        this.value = value
        this.text = text
        this.llaves = llaves
    }
}
/*
let numeros = [1, 2, 3];
    numeros.push(4, 5); // numeros ahora es [1, 2, 3, 4, 5]
*/

let motions = []
motions.push(new Motion("nada","Selecciona una Opción",[""]))
motions.push(new Motion("hola","Hola Frida",['hola','saludo','saludar','saludarte']))
motions.push(new Motion("opa","¿Que es OPA?",[' opa ','asistente']))
motions.push(new Motion("sordo","¿Ayuda a personas con hipoacusia?",['sordo','sordera','no escucha','hipoacusia','hipoacúsica','hipoacusica','hipoacúsico','hipoacusico']))
motions.push(new Motion("ciego","¿Ayuda a personas no videntes?",[' ciego ',' ciega ','no vidente']))
motions.push(new Motion("hora","¿Que hora es?",['hora','horario','reloj']))
motions.push(new Motion("fecha","¿Que fecha es hoy?",[' dia ','día','fecha']))
motions.push(new Motion("clima","¿Como esta el clima?",['clima','tiempo','temperatura']))
motions.push(new Motion("donde","¿En donde estamos?",['donde','adonde','ubicacion','ubicación']))
motions.push(new Motion("fp","¿Que es Formación Profesional?",['formación profesional','formacion profesional']))
motions.push(new Motion("programacion","¿Puedo ser programador?",['programador','programacion','programación','software','desarrollo']))
motions.push(new Motion("especialidades","¿Hay especialidades de Programación?",['especialidades','especialización','especializacion']))
motions.push(new Motion("trayectos","¿Que otros trayectos o cursos puedo hacer?",['trayecto','trayectos','curso','cursos']))
motions.push(new Motion("estudiar","¿Porque debo estudiar en la vida?",['estudiar','crecer','merito']))
motions.push(new Motion("requisitos","¿Que necesito para estudiar en Formación Profesional?",['requisitos','inscripción','inscripcion','inscribirme','inscribir','anotarme']))
motions.push(new Motion("frida","Quien fue Frida Kahlo?",['pintora','mexicana','frida kahlo','frida kalo','frida calo']))
motions.push(new Motion("hablame","Háblame con arte",['arte']))
motions.push(new Motion("locura","Háblame con locura o rebeldía",['locura','loca','rebeldía','rebeldia']))
motions.push(new Motion("alegria","Háblame con alegría y esperanza",['alegría','alegria','esperanza','esperanzada','optimista','optimismo']))
motions.push(new Motion("argentina","Háblame como Argentina",['argenta','argentina','argentino']))
motions.push(new Motion("carpincho","¿Que son los carpinchos?  ",['carpincho','carpinchos','carpinchito','carpinchitos','capibara','capibaras','chiguire','chiguires','capiguara','capiguaras']))
motions.push(new Motion("chiste","¿Podes contar un chiste malo?",['chiste']))
motions.push(new Motion("horos_aries","Horóscopo Aries",[' aries']))
motions.push(new Motion("horos_tauro","Horóscopo Tauro",['tauro']))
motions.push(new Motion("horos_geminis","Horóscopo Géminis",['geminis','géminis']))
motions.push(new Motion("horos_cancer","Horóscopo Cáncer",['cancer','cáncer']))
motions.push(new Motion("horos_leo","Horóscopo Leo",[' leo ']))
motions.push(new Motion("horos_virgo","Horóscopo Virgo",[' virgo ']))
motions.push(new Motion("horos_libra","Horóscopo Libra",[' libra ']))
motions.push(new Motion("horos_escorpio","Horóscopo Escorpio",['escorpio']))
motions.push(new Motion("horos_sagitario","Horóscopo Sagitario",['sagitario']))
motions.push(new Motion("horos_capricornio","Horóscopo Capricornio",['capricornio']))
motions.push(new Motion("horos_acuario","Horóscopo Acuario",['acuario']))
motions.push(new Motion("horos_piscis","Horóscopo Piscis",['piscis']))
motions.push(new Motion("color_normal","Fondo normal",['normal','defecto']))
motions.push(new Motion("color_rojo","Fondo rojo",['rojo','colorado']))
motions.push(new Motion("color_verde","Fondo verde",['verde']))
motions.push(new Motion("color_azul","Fondo azul",['azul','ashul','ayul',' asul ','azulado',' asulado ']))
motions.push(new Motion("color_blanco","Fondo blanco",['blanco']))
motions.push(new Motion("color_negro","Fondo negro",['negro']))
motions.push(new Motion("color_cyan","Fondo cyan",['cyan',' cian ',' sian ']))
motions.push(new Motion("color_magenta","Fondo magenta",['magenta','majenta']))
motions.push(new Motion("color_amarillo","Fondo amarillo",['amarillo']))
motions.push(new Motion("color_violeta","Fondo violeta",['violeta','violetta']))
motions.push(new Motion("color_gris","Fondo gris",['gris',' gray ',' grai ']))
motions.push(new Motion("color_rosa","Fondo rosa",['rosa','rosado']))
motions.push(new Motion("color_marron","Fondo marron",['marron']))
motions.push(new Motion("color_naranja","Fondo naranja",['naranja','anaranjado']))
motions.push(new Motion("color_beige","Fondo beige",['beige','beish']))
motions.push(new Motion("color_celeste","Fondo celeste",['celeste']))
motions.push(new Motion("color_purpura","Fondo purpura",['purpura']))
motions.push(new Motion("color_lavanda","Fondo lavanda",['lavanda','labanda']))
motions.push(new Motion("color_oliva","Fondo oliva",['oliva','oliba','olivo','aceituna','tutuna']))
motions.push(new Motion("color_turquesa","Fondo turquesa",['turqueza','turquesa','turkesa','turqueza']))
motions.push(new Motion("color_salmon","Fondo salmon",['salmon','zalmon']))
motions.push(new Motion("color_tomate","Fondo tomate",['tomate']))
motions.push(new Motion("color_plata","Fondo plata",['plata']))
motions.push(new Motion("color_oro","Fondo oro",[' oro ']))


/*
<option value="nada">Selecciona una Opción</option> 
<option value="hola">Hola Frida</option>
<option value="opa">Que es OPA?</option>
<option value="sordo">Ayuda a personas con problemas auditivos?</option>
<option value="ciego">Ayuda a personas no videntes?</option>
<option value="hora">Que hora es?</option>
<option value="fecha">Que fecha es hoy?</option>
<option value="clima">Como esta el clima?</option>
<option value="donde">En donde estamos?</option>
<option value="formacion">Que es Formación Profesional?</option>
<option value="programacion">Puedo estudiar Programación?</option>
<option value="especialidades">Hay especialidades de Programación?</option>
<option value="cursos">Que otros trayectos o cursos puedo estudiar?</option>
<option value="estudiar">Porque debo estudiar en la vida?</option>
<option value="requisitos">Que necesito para estudiar en Formación Profesional?
</option>
<option value="frida">Quien fue Frida?</option>
<option value="chiste">Podes contar un chiste malo?</option>
<option value="frases">Frases de Frida?</option>
<option value="argenta">Frida Argenta?</option>
*/