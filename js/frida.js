const frida = document.querySelector("#frida");
const texto = document.querySelector("#output");
const preguntas = document.getElementById("preguntas")
const panel = document.getElementById("panel")
textToSpeak = "- Perdón no entendí";

function runSpeechRecognition() {
    callar()

    // new speech recognition object in Spanish!
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = "es-AR"

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        frida.classList.add("listening");
    };

    // stop listenting the speech recognition
    recognition.onspeechend = function () {
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const confidence = event.results[0][0].confidence;
        console.log(transcript)
        console.log("conf" + confidence)
        textToSpeak = "- Perdón no entendí";

        //Resolución Clásica
        for(a=0; a<motions.length; a++){
            for(x=0; x<motions[a].llaves.length; x++){
                if(transcript.includes(motions[a].llaves[x])){
                    textToSpeak="xxxx"+a
                    //preguntas.setAttribute("selectedIndex",a)
                    preguntas.selectedIndex = a
                }
            }
        }
        cambiar()
        
        /*
        //Cambio de colores
        if (transcript.includes("defecto") || transcript.includes("normal")) {
            panel.style.backgroundColor = '#26214f'
            textToSpeak = 'Panel de color Normal.'
        }

        if (transcript.includes("rojo") || transcript.includes("colorado")) {
            panel.style.backgroundColor = 'red'
            textToSpeak = 'Panel de color Rojo.'
        }

        if (transcript.includes("verde")) {
            panel.style.backgroundColor = 'green'
            textToSpeak = 'Panel de color Verde.'
        }

        if (transcript.includes("azul")) {
            panel.style.backgroundColor = 'blue'
            textToSpeak = 'Panel de color Azul.'
        }

        if (transcript.includes("rosa") || transcript.includes("rosado")) {
            panel.style.backgroundColor = 'pink'
            textToSpeak = 'Panel de color Rosa.'
        }

        if (transcript.includes("amarillo")) {
            panel.style.backgroundColor = 'yellow'
            textToSpeak = 'Panel de color Amarillo.'
        }

        if (transcript.includes("blanco")) {
            panel.style.backgroundColor = 'white'
            textToSpeak = 'Panel de color Blanco.'
        }

        if (transcript.includes("negro")) {
            panel.style.backgroundColor = 'black'
            textToSpeak = 'Panel de color Negro.'
        }

        if (transcript.includes("violeta") || transcript.includes("violetta")) {
            panel.style.backgroundColor = 'violet'
            textToSpeak = 'Panel de color Violeta.'
        }

        if (transcript.includes("marron") || transcript.includes("marrón")) {
            panel.style.backgroundColor = 'brown'
            textToSpeak = 'Panel de color Marron.'
        }

        if (transcript.includes("celeste")) {
            panel.style.backgroundColor = 'skyblue'
            textToSpeak = 'Panel de color Celeste.'
        }

        if (transcript.includes("hora") || transcript.includes("horario") || transcript.includes("reloj")) {
            textToSpeak = hora();
        }

        if (transcript.includes("hola")) {
            textToSpeak = hola();
        }
        */
        /*
        // only run the special sentences if confidence is "high"
        if (confidence > 0.75) {

            if (transcript.includes("hora") || transcript.includes("horario") || transcript.includes("reloj")) {
                //preguntas.selectedIndex = 5
                console.log("xxxx")
                preguntas.setAttribute("selectedIndex",5)
            }

            if (transcript.includes("hola") || transcript.includes("frida") || transcript.includes("inteligencia") || transcript.includes("artificial")) {
                //hola();
            }
            if (transcript.includes("fecha") || transcript.includes("día") || transcript.includes("hoy")) {
                //fecha();
            }
            if (transcript.includes("clima") || transcript.includes("temperatura") || transcript.includes("tiempo")) {
                //clima();
            }
            if (transcript.includes("ubicacion") || transcript.includes("ubicación") || transcript.includes("donde") || transcript.includes("dónde") || transcript.includes("estamos")) {
                //ubicacion();
            }
            if (transcript.includes("formación profesional") || transcript.includes("colegio") || transcript.includes("escuela") || transcript.includes("formacion profesional") || transcript.includes("formación") || transcript.includes("laboral") || transcript.includes("oficio") || transcript.includes("oficios")) {
                //fp();
            }
            if (transcript.includes("programación") || transcript.includes("programacion") || transcript.includes("programar") || transcript.includes("software") || transcript.includes("desarrollo") || transcript.includes("programa")) {
                //programacion();
            }
            if (transcript.includes("videojuegos") || transcript.includes("video juegos") || transcript.includes("base de datos") || transcript.includes("seguridad") || transcript.includes("especialidad") || transcript.includes("especialidades") || transcript.includes("aplicaciones") || transcript.includes("web")) {
                //especialidades();
            }
            if (transcript.includes("estudiante") || transcript.includes("carrera") || transcript.includes("curso") || transcript.includes("cursos") || transcript.includes("trayecto") || transcript.includes("trayectos")) {
                //estudiar();
            }
            if (transcript.includes("locura") || transcript.includes("fruta") || transcript.includes("bardo") || transcript.includes("bardear")) {
                //bardear();
            }
                
        }
        */

        // show the closed captioned and remove after 3 seconds
        //texto.textContent = transcript      //+" "+confidence
        //setTimeout(function () {
        //    texto.textContent = "Escuchando .......";
        //}, 5000)

        //hablarFrida()

    }

    // start recognition
    recognition.start()

}

function hablarFrida() {
    texto.innerHTML = '- ' + textToSpeak
    let speech = new SpeechSynthesisUtterance()
    speech.lang = "es-AR"
    speech.text = textToSpeak
    speech.onend = function (event) {
        console.log(event.elapsedTime)
        setTimeout(function () {
            frida.classList.remove("speaking")
        }, 600 - (event.elapsedTime % 600))
    }
    frida.classList.remove("listening")
    frida.classList.add("speaking")
    window.speechSynthesis.speak(speech)
}

function cambiar() {
    callar()
    textToSpeak = ""
    if (preguntas.value == "hora") { textToSpeak = hora() }
    if (preguntas.value == "hola") { textToSpeak = hola() }
    hablarFrida()
}

function cargar() {
    motions.forEach((motion) => {
            const nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = motion.value;
            nuevaOpcion.text = motion.text;
            preguntas.appendChild(nuevaOpcion);
    });
}

