const frida = document.querySelector("#frida");
const texto = document.querySelector("#output");
const preguntas = document.getElementById("preguntas")
const selectColores = document.getElementById("colores")
const selectFp = document.getElementById("fp")
const selectHoroscopo = document.getElementById("horoscopo")
const panel = document.getElementById("panel")
var textToSpeak = "";

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
        //console.log(transcript)
        //console.log("conf" + confidence)

        //Filtro de palabras inapropiadas
        //palabras=transcript.toSplit(" ")
        //palabras.forEach(palabra=>inapropiadas.forEach(inapropiada=>{
        //    if(palabra==inapropiada){
        //        textToSpeak="No debes decir esas palabras"
        //        hablarFrida()
        //    }
        //}))

        //Transcript proyectado en select preguntas
        for (a = 0; a < motions.length; a++) {
            for (x = 0; x < motions[a].llaves.length; x++) {
                if (transcript.includes(motions[a].llaves[x])) {
                    preguntas.selectedIndex = a
                }
            }
        }
        if (preguntas.selectedIndex!=0) cambiar()

        //Transcript proyectado en selectFp
        for (a = 0; a < fps.length; a++) {
            for (x = 0; x < fps[a].llaves.length; x++) {
                if (transcript.includes(fps[a].llaves[x])) {
                    selectFp.selectedIndex = a
                }
            }
        }
        if (selectFp.selectedIndex!=0) cambiarFp()

        //Transcript proyectado en select selectColores
        for (a = 0; a < colores.length; a++) {
            for (x = 0; x < colores[a].llaves.length; x++) {
                if (transcript.includes(colores[a].llaves[x])) {
                    selectColores.selectedIndex = a
                }
            }
        }
        if (selectColores.selectedIndex!=0) cambiarColor()

        //Transcript proyectado en select selectHoroscopo
        for (a = 0; a < sodiaco.length; a++) {
            for (x = 0; x < sodiaco[a].llaves.length; x++) {
                if (transcript.includes(sodiaco[a].llaves[x])) {
                    selectHoroscopo.selectedIndex = a
                }
            }
        }
        if (selectHoroscopo.selectedIndex!=0) cambiarHoroscopo()

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

function cambiarFp(){
    callar()
    argumento=""
    if (typeof window[selectFp.value] === 'function') {
        textToSpeak=window[selectFp.value](argumento);
    } else {
        textToSpeak="Perdón no entendí"
    }
    hablarFrida()
}

function cambiarColor() {
    callar()
    argumento=""
    textToSpeak=colores.filter(m=>m.value==selectColores.value)[0].text
    color(selectColores.value.substring(6))
    hablarFrida()
}

function cambiarHoroscopo() {
    callar()
    argumento=""
    //if (typeof window[preguntas.value] === 'function') {
    //    textToSpeak=window[preguntas.value](argumento);
    //} else {
    //    textToSpeak="Perdón no entendí"
    //}
    textToSpeak="No disponible por el momento"
    hablarFrida()
}

function cargar() {
    motions.forEach(m => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = m.value;
        nuevaOpcion.text = m.text;
        preguntas.appendChild(nuevaOpcion);
    });
    fps.forEach(m => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = m.value;
        nuevaOpcion.text = m.text;
        selectFp.appendChild(nuevaOpcion);
    });
    colores.forEach(c => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = c.value;
        nuevaOpcion.text = c.text;
        selectColores.appendChild(nuevaOpcion);
    });
    sodiaco.forEach(c => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = c.value;
        nuevaOpcion.text = c.text;
        selectHoroscopo.appendChild(nuevaOpcion);
    });
}

