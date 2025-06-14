const frida = document.querySelector("#frida");
const texto = document.querySelector("#output");
const preguntas = document.getElementById("preguntas")
const panel = document.getElementById("panel")
textToSpeak = "";

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

        for (a = 0; a < motions.length; a++) {
            for (x = 0; x < motions[a].llaves.length; x++) {
                if (transcript.includes(motions[a].llaves[x])) {
                    //preguntas.setAttribute("selectedIndex",a)
                    preguntas.selectedIndex = a
                }
            }
        }
        cambiar()

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

    argumento=""

    if (typeof window[preguntas.value] === 'function') {
        textToSpeak=window[preguntas.value](argumento);
    } else {
        textToSpeak="Perdón no entendí"
    }

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

