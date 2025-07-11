const frida = document.querySelector("#frida");
const texto = document.querySelector("#output");
const preguntas = document.getElementById("preguntas")
const selectColores = document.getElementById("colores")
const selectFp = document.getElementById("fp")
const selectHoroscopo = document.getElementById("horoscopo")
const selectNoVisible = document.getElementById("no_visible")
const panel = document.getElementById("panel")
var textToSpeak = ""

function runSpeechRecognition() {
    callarFrida()

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
        //recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        callarFrida()
        preguntas.selectedIndex=0
        selectColores.selectedIndex=0
        selectFp.selectedIndex=0
        selectHoroscopo.selectedIndex=0
        selectNoVisible.selectedIndex=0

        transcript = event.results[0][0].transcript.toLowerCase();
        const confidence = event.results[0][0].confidence;
        console.log(transcript)
        console.log("conf" + confidence)

        transcript=transcript
                                .replace(".","")
                                .replace(",","")
                                .replace("?","")
                                .replace("¿","")
                                .replace("!","")
                                .replace("¡","")

        //Filtro de palabras inapropiadas
        var inapropiadaFlag=false
        const palabras=transcript.split(" ")
        palabras.forEach(palabra=>inapropiadas.forEach(inapropiada=>{
            if(palabra==inapropiada){
                inapropiadaFlag=true
                textToSpeak=respuestaEleganteRandom()
                hablarFrida()
            }
        }))

        if(!inapropiadaFlag){
            //Transcript proyectado en select preguntas
            for (a = 0; a < motions.length; a++) {
                for (x = 0; x < motions[a].llaves.length; x++) {
                    if (palabras.includes(motions[a].llaves[x])) {
                        preguntas.selectedIndex = a
                    }
                }
            }
            if (preguntas.selectedIndex!=0) cambiar()

            //Transcript proyectado en selectFp
            for (a = 0; a < fps.length; a++) {
                for (x = 0; x < fps[a].llaves.length; x++) {
                    if (palabras.includes(fps[a].llaves[x])) {
                        selectFp.selectedIndex = a
                    }
                }
            }
            if (selectFp.selectedIndex!=0) cambiarFp()

            //Transcript proyectado en select selectColores
            for (a = 0; a < colores.length; a++) {
                for (x = 0; x < colores[a].llaves.length; x++) {
                    if (palabras.includes(colores[a].llaves[x])) {
                        selectColores.selectedIndex = a
                    }
                }
            }
            if (selectColores.selectedIndex!=0) cambiarColor()

            //Transcript proyectado en select selectNoVisibles
            for (a = 0; a < no_visibles.length; a++) {
                for (x = 0; x < no_visibles[a].llaves.length; x++) {
                    if (transcript.includes(no_visibles[a].llaves[x])) {
                        selectNoVisible.selectedIndex = a
                    }
                }
            }
            if (selectNoVisible.selectedIndex!=0) cambiarNoVisible()


            //Transcript proyectado en select selectHoroscopo
            for (a = 0; a < sodiaco.length; a++) {
                for (x = 0; x < sodiaco[a].llaves.length; x++) {
                    if (palabras.includes(sodiaco[a].llaves[x])) {
                        selectHoroscopo.selectedIndex = a
                    }
                }
            }
            if (selectHoroscopo.selectedIndex!=0) cambiarHoroscopo()
        }
        if( preguntas.selectedIndex==0 && 
            selectFp.selectedIndex==0 &&
            selectColores.selectedIndex==0 &&
            selectHoroscopo.selectedIndex==0 &&
            selectNoVisible.selectedIndex==0 &&
            inapropiadaFlag==false){
                textToSpeak="Perdón no entendí"
                hablarFrida()
        }

    }

    // start recognition
    recognition.start()

}

function hablarFrida() {
    window.speechSynthesis.cancel
    texto.innerHTML = '- ' + textToSpeak
    speech = new SpeechSynthesisUtterance()
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

function callarFrida(){
    window.speechSynthesis.cancel()
    frida.classList.remove("speaking")
    frida.classList.add("listening")
}

function cambiar() {
    callarFrida()
    argumento=""
    if (typeof window[preguntas.value] === 'function') {
        textToSpeak=window[preguntas.value](argumento);
    }
    hablarFrida()
}

function cambiarFp(){
    callarFrida()
    argumento=""
    if (typeof window[selectFp.value] === 'function') {
        textToSpeak=window[selectFp.value](argumento);
    }
    hablarFrida()
}

function cambiarColor() {
    callarFrida()
    argumento=""
    textToSpeak=colores.filter(m=>m.value==selectColores.value)[0].text
    color(selectColores.value.substring(6))
    hablarFrida()
}

function cambiarHoroscopo() {
    callarFrida()
    //argumento=""
    //if (typeof window[preguntas.value] === 'function') {
    //    textToSpeak=window[preguntas.value](argumento);
    //} else {
    //    textToSpeak="Perdón no entendí"
    //}
    //textToSpeak="No disponible por el momento"
    textToSpeak=horoscopo(selectHoroscopo.value.substring(6))
    hablarFrida()
}

function cambiarNoVisible(){
    callarFrida()
    argumento=""
    textToSpeak=no_visibles.filter(m=>m.value==selectNoVisible.value)[0].text
    console.log(textToSpeak)
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
    no_visibles.forEach(c => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = c.value;
        nuevaOpcion.text = c.text;
        selectNoVisible.appendChild(nuevaOpcion);
    });
}
