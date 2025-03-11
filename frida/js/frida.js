function runSpeechRecognition() {
    const frida = document.querySelector("#frida");
    const texto = document.querySelector("#output");

    console.log("------");

    // new speech recognition object in Spanish!
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "es";

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
        console.log(confidence)
        let textToSpeak = "Perdón. No comprendí.";

        // only run the special sentences if confidence is "high"
        if (confidence > 0.75) {
            const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
            const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            const d = new Date();

            if ((transcript.indexOf(" día") > -1 || transcript.indexOf(" dia") > -1) && transcript.indexOf(" hoy") > -1) {
                textToSpeak = `Hoy es ${dias[d.getDay()]}`;
            } else if ((transcript.indexOf(" día") > -1 || transcript.indexOf(" dia") > -1) && transcript.indexOf(" mañana") > -1) {
                const n = d.getDay();
                textToSpeak = `Mañana será ${dias[(n + 1) % 7]}`;
            } else if (transcript.indexOf("hora") > -1) {
                let hour = d.getHours();
                if (hour > 12) hour -= 12;
                if (hour === 0) hour = 12;
                const minutes = d.getMinutes();
                let textMinutes = `y ${minutes} minutos`;
                if (minutes === 0) { textMinutes = "en punto"; }
                if (minutes === 1) { textMinutes = "y 1 minuto"; }
                if (minutes === 15) { textMinutes = "y cuarto"; }
                if (minutes === 30) { textMinutes = "y media"; }
                textToSpeak = `Son las ${hour} ${textMinutes}`;
            } else if (transcript.indexOf(" fecha") > -1 && transcript.indexOf(" hoy") > -1) {
                textToSpeak = `Hoy es ${d.getDate()} de ${meses[d.getMonth()]}`;
            } else if (transcript.indexOf(" fecha") > -1 && transcript.indexOf(" mañana") > -1) {
                d.setDate(d.getDate() + 1)
                textToSpeak = `Mañana será ${d.getDate()} de ${meses[d.getMonth()]}`;
            } else if (transcript.indexOf(" mejor") > -1 && transcript.indexOf(" profesora") > -1) {
                textToSpeak = `Carlos es el mejor profesor`;
            } else if (transcript === "hola" || transcript === "hola frida") {
                textToSpeak = `¡Hola!`;
            } else if ((transcript.indexOf("como") > -1 || transcript.indexOf("cómo") > -1) && transcript.indexOf("llamas") > -1) {
                textToSpeak = "Me llamo Frida. ¿Cómo te llamas tú?"
            } else if ((transcript.indexOf("como") > -1 || transcript.indexOf("cómo") > -1) && (transcript.indexOf("estas") > -1 || transcript.indexOf("estás"))) {
                textToSpeak = "Estoy bien, ¿y tú?"
            }
        }

        // show the closed captioned and remove after 3 seconds
        texto.textContent = textToSpeak;
        setTimeout(function () {
            texto.textContent = "";
        }, 3000)

        // read out loud the answer
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "es-AR";
        speech.text = textToSpeak;
        speech.onend = function (event) {
            console.log(event.elapsedTime);
            setTimeout(function () {
                frida.classList.remove("speaking");
            }, 600 - (event.elapsedTime % 600));
        }
        frida.classList.remove("listening");
        frida.classList.add("speaking");
        window.speechSynthesis.speak(speech);
    };

    // start recognition
    recognition.start();
}
