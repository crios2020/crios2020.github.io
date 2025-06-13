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
motions.push(new Motion("chiste","¿Podes contar un chiste malo?",['chiste']))
motions.push(new Motion("hablame","Hablame con arte",['arte']))
motions.push(new Motion("alegrar","Hablame con locura o rebeldía",['locura','loca','rebeldía','rebeldia']))
motions.push(new Motion("nada","Selecciona una Opción",[""]))
motions.push(new Motion("nada","Selecciona una Opción",[""]))

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