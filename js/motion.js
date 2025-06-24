class Motion {
    constructor(value, text, llaves) {
        this.value = value
        this.text = text
        this.llaves = llaves
    }
}

let motions = []
motions.push(new Motion("nada","Hablá con Frida!",[""]))
motions.push(new Motion("hola","Hola Frida",['hola','saludo','saludar','saludarte']))
motions.push(new Motion("opa","¿Que es OPA?",['opa','asistente']))
motions.push(new Motion("sordo","¿Ayuda a personas con hipoacusia?",['sordo','sordera','no escucha','hipoacusia','hipoacúsica','hipoacusica','hipoacúsico','hipoacusico']))
motions.push(new Motion("ciego","¿Ayuda a personas no videntes?",['ciego','ciega','no vidente','cieguito', 'cieguita']))
motions.push(new Motion("hora","¿Que hora es?",['hora','horario','reloj']))
motions.push(new Motion("fecha","¿Que fecha es hoy?",['dia','día','fecha']))
motions.push(new Motion("clima","¿Como esta el clima?",['clima','tiempo','temperatura']))
motions.push(new Motion("donde","¿En donde estamos?",['donde','adonde','ubicacion','ubicación','dónde','adónde']))
motions.push(new Motion("bio","Quien fue Frida Kahlo?",['pintora','mexicana','frida kahlo','frida kalo','frida calo']))
motions.push(new Motion("hablame","Háblame con arte",['arte']))
motions.push(new Motion("locura","Háblame con locura o rebeldía",['locura','loca','rebeldía','rebeldia','sarcasmo']))
motions.push(new Motion("alegria","Háblame con alegría",['alegría','alegria','esperanzada','optimista','optimismo']))
motions.push(new Motion("amor","Háblame de amor",['amor']))
motions.push(new Motion("argentina","Háblame como Argentina",['argenta','argentina','argentino']))
motions.push(new Motion("carpincho","¿Que son los carpinchos?  ",['carpincho','carpinchos','carpinchito','carpinchitos','capibara','capibaras','chiguire','chiguires','capiguara','capiguaras','pincho']))
motions.push(new Motion("chiste","¿Podes contar un chiste malo?",['chiste']))
motions.push(new Motion("creditos","acerca de ",['autor','credito','autores','creditos','crédito','créditos','diseñadora','diseñador','autor']))

let fps = []
fps.push(new Motion("nada","Consultá sobre Formación Profesional!",[""]))
fps.push(new Motion("fp","¿Que es Formación Profesional?",['formación profesional','formacion profesional','formación','formacion','formasion','formasión','profesional']))
fps.push(new Motion("trayectos","¿Que otros trayectos o cursos puedo hacer?",['trayecto','trayectos','curso','cursos']))
fps.push(new Motion("programacion","¿Puedo ser programador?",['programador','programacion','programación','software','desarrollo']))
fps.push(new Motion("especialidades","¿Hay especialidades de Programación?",['especialidades','especialización','especializacion']))
fps.push(new Motion("estudiar","¿Porque debo estudiar en la vida?",['estudiar','crecer','merito']))
fps.push(new Motion("requisitos","¿Que necesito para estudiar en Formación Profesional?",['requisitos','inscripción','inscripcion','inscribirme','inscribir','anotarme']))

let colores = []
colores.push(new Motion("nada","Cambiá el color",[""]))
colores.push(new Motion("color_#d8457b","Panel de color normal",['normal','defecto']))
colores.push(new Motion("color_red","Panel de color rojo",['rojo','colorado']))
colores.push(new Motion("color_green","Panel de color verde",['verde']))
colores.push(new Motion("color_blue","Panel de color azul",['azul','ashul','ayul',' asul ','azulado',' asulado ']))
colores.push(new Motion("color_white","Panel de color blanco",['blanco']))
colores.push(new Motion("color_black","Panel de color negro",['negro']))
colores.push(new Motion("color_cyan","Panel de color cyan",['cyan','cian ','sian ']))
colores.push(new Motion("color_magenta","Panel de color magenta",['magenta','majenta']))
colores.push(new Motion("color_yellow","Panel de color amarillo",['amarillo']))
colores.push(new Motion("color_violet","Panel de color violeta",['violeta','violetta']))
colores.push(new Motion("color_gray","Panel de color gris",['gris',' gray ',' grai ']))
colores.push(new Motion("color_pink","Panel de color rosa",['rosa','rosado']))
colores.push(new Motion("color_brown","Panel de color marron",['marron']))
colores.push(new Motion("color_orange","Panel de color naranja",['naranja','anaranjado']))
colores.push(new Motion("color_beige","Panel de color beige",['beige','beish']))
colores.push(new Motion("color_skyblue","Panel de color celeste",['celeste']))
colores.push(new Motion("color_purple","Panel de color purpura",['purpura']))
colores.push(new Motion("color_lavanda","Panel de color lavanda",['lavanda','labanda']))
colores.push(new Motion("color_olive","Panel de color oliva",['oliva','oliba','olivo','aceituna','tutuna']))
colores.push(new Motion("color_turquoise","Panel de color turquesa",['turqueza','turquesa','turkesa','turqueza']))
colores.push(new Motion("color_salmon","Panel de color salmón",['salmon','zalmon']))
colores.push(new Motion("color_tomate","Panel de color tomate",['tomate']))
colores.push(new Motion("color_silver","Panel de color plata",['plata']))
colores.push(new Motion("color_gold","Panel de color oro",['oro','dorado']))

let sodiaco = []
sodiaco.push(new Motion("nada","Consultá el Zodiaco",[""]))
sodiaco.push(new Motion("horos_aries","Horóscopo Aries",['aries']))
sodiaco.push(new Motion("horos_tauro","Horóscopo Tauro",['tauro']))
sodiaco.push(new Motion("horos_geminis","Horóscopo Géminis",['geminis','géminis']))
sodiaco.push(new Motion("horos_cancer","Horóscopo Cáncer",['cancer','cáncer']))
sodiaco.push(new Motion("horos_leo","Horóscopo Leo",['leo']))
sodiaco.push(new Motion("horos_virgo","Horóscopo Virgo",['virgo']))
sodiaco.push(new Motion("horos_libra","Horóscopo Libra",['libra']))
sodiaco.push(new Motion("horos_escorpio","Horóscopo Escorpio",['escorpio']))
sodiaco.push(new Motion("horos_sagitario","Horóscopo Sagitario",['sagitario']))
sodiaco.push(new Motion("horos_capricornio","Horóscopo Capricornio",['capricornio']))
sodiaco.push(new Motion("horos_acuario","Horóscopo Acuario",['acuario']))
sodiaco.push(new Motion("horos_piscis","Horóscopo Piscis",['piscis']))

let no_visibles = []
no_visibles.push(new Motion("nada","nada",[]))
no_visibles.push(new Motion("profe","¡El mejor profe es Carlos Ríos! ¡Sin lugar a dudas!",["mejor profe","mejor profesor","mejor docente"]))
no_visibles.push(new Motion("prog","Carlos Ríos, es un analista de sistemas y docente argentino, que creo el software OPA, que impulsa el motor de mi inteligencia artificial.",["carlos rios","carlos ríos"]))
no_visibles.push(new Motion("espe","¡No, no hay esperanzas!",["hay esperansa","hay esperansas","hay esperanza","hay esperanzas"]))
no_visibles.push(new Motion("feo","¡ponele!",["soy lindo","soy bello","somos lindos","somos bellos"]))



