function runSpeechRecognition() {
    callar()
    const frida = document.querySelector("#frida");
    const texto = document.querySelector("#output");
    
    console.log("------");

    // new speech recognition object in Spanish!
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "es-AR";

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
        let textToSpeak = "";

        // only run the special sentences if confidence is "high"
        if (confidence > 0.75) {

            if (transcript.includes("hola") || transcript.includes("frida") || transcript.includes("inteligencia") || transcript.includes("artificial")) {
                hola();
            }
            if (transcript.includes("hora") || transcript.includes("horario") || transcript.includes("reloj")) {
                hora();
            }
            if (transcript.includes("fecha") || transcript.includes("día") || transcript.includes("hoy")) {
                fecha();
            }
            if (transcript.includes("clima") || transcript.includes("temperatura") || transcript.includes("tiempo")) {
                clima();
            }
            if (transcript.includes("ubicacion") || transcript.includes("ubicación") || transcript.includes("donde") || transcript.includes("dónde") || transcript.includes("estamos")) {
                ubicacion();
            }
            if (transcript.includes("formación profesional") || transcript.includes("colegio") || transcript.includes("escuela") || transcript.includes("formacion profesional") || transcript.includes("formación") || transcript.includes("laboral") || transcript.includes("oficio") || transcript.includes("oficios")) {
                fp();
            }
            if (transcript.includes("programación") || transcript.includes("programacion") || transcript.includes("programar") || transcript.includes("software") || transcript.includes("desarrollo") || transcript.includes("programa")) {
                programacion();
            }
            if (transcript.includes("videojuegos") || transcript.includes("video juegos") || transcript.includes("base de datos") || transcript.includes("seguridad") || transcript.includes("especialidad") || transcript.includes("especialidades") || transcript.includes("aplicaciones") || transcript.includes("web")) {
                especialidades();
            }
            if (transcript.includes("estudiante") || transcript.includes("carrera") || transcript.includes("curso") || transcript.includes("cursos") || transcript.includes("trayecto") || transcript.includes("trayectos")) {
                estudiar();
            }
            if (transcript.includes("locura") || transcript.includes("fruta") || transcript.includes("bardo") || transcript.includes("bardear")) {
                bardear();
            }
        }

        // show the closed captioned and remove after 3 seconds
        texto.textContent = transcript      //+" "+confidence
        //setTimeout(function () {
        //    texto.textContent = "Escuchando .......";
        //}, 5000)

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

    function hola() {
        callar()
        hablar("Hola soy Frida, asistente personal libre, estoy para ayudarte!")
        hablar("Soy un bot de inteligencia artificial, ")
        hablar("tengo información del tiempo y trayectos de estudios.")
        hablar("Fui programado en java script por alumnos de formación profesional, ")
        hablar("Bienvenidos a la noche de los oficios!")
    }

    function hora() {
        callar()
        hablar(" es la hora " + getHora() + " es " + getMomento() + " es momento de " + getMomentoAccion())
    }

    function fecha() {
        callar()
        hablar("Hoy es " + getFecha() + " " + hoyEs() + " estamos en " + getEstacion() + ", ")
        efemerides()
    }

    function clima() {
        //temperatura = getTemperatura()
        //clima = getClima()
        hora = new Date().getHours()

        /* Opción para hardcodear */
        temperatura=11
        //sensacionTermica=20
        clima="algo nublado"

        hablar(" La temperatura es " + temperatura + " grados centígrados ")
        hablar("El clima es " + clima + " ")

        if (temperatura <= 0) hablar("Cuidado! Hace muchisimo frio, esta nevando!")
        if (temperatura > 0 && temperatura <= 5) hablar("Hace frio, hay heladas!")
        if (temperatura > 5 && temperatura <= 10) hablar("Está fresco!")
        if (temperatura > 10 && temperatura <= 15) hablar("Está Templado!")
        if (temperatura > 15 && temperatura <= 20) hablar("Está Agradable!")
        if (temperatura > 20 && temperatura <= 25) hablar("Está cálido!")
        if (temperatura > 25 && temperatura <= 30) hablar("Hace Calor!")
        if (temperatura > 30 && temperatura <= 35) hablar("Hace Mucho Calor!")
        if (temperatura > 35 && temperatura <= 40) hablar("Cuidado! Hace muchisimo Calor!")

        if (clima.includes("nube")) hablar("En el cielo hay pocas nubes!")
        if (clima.includes("nubla")) hablar("El cielo esta Nublado!")
        if (clima.includes("claro") || clima.includes("limpi")) hablar("El cielo esta despejado!")
        if (temperatura < 26) hablar("Salir abrigado! ")
        if (clima.includes("lluv") || clima.includes("llov")) {
            hablar("Esta lloviendo!, Salir con paraguas!")
            if (hora >= 15 && hora <= 18 && temperatura <= 18) hablar("Esta para hacer unas tortafritas!")
        } else hablar("No hay lluvias")

        if (clima.includes("nev") || clima.includes("niev")) hablar("Esta Nevando!")

        if (clima.includes("nebli") || clima.includes("niebl")) hablar("Hay Neblina!")

        if (clima.includes("gra")) hablar("Alerta Granizada!")
    }

    function ubicacion() {
        callar()
        //provincia=getProvincia()
        //pais=getPais()
        //region=getRegion()

        /* Opción para hardcodear */
        provincia = "Ciudad Autónoma de Buenos Aires"
        pais = "Argentina"
        region = "America del sur"

        hablar("nos encontramos en " + provincia + ", país " + pais + ", en la región de " + region + ", ")
    }
}
