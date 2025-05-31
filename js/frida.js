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
        let textToSpeak = "";

        // only run the special sentences if confidence is "high"
        if (confidence > 0.75) {

            if (transcript === "hola") {
                hola();
            }

            if (transcript === "hora" || transcript === "horario" || transcript === "reloj" || transcript === "order" || transcript === "hello") {
                hora();
            }
            if (transcript === "fecha") {
                fecha();
            }
            if (transcript === "clima" || transcript === "temperatura" || transcript === "tiempo") {
                clima();
            }
            if (transcript === "ubicacion" || transcript === "ubicación" || transcript === "donde" || transcript === "dónde" || transcript === "estamos") {
                ubicacion();
            }
            if (transcript === "formación profesional" || transcript === "colegio" || transcript === "escuela" || transcript === "formacion profesional" || transcript === "oficio" || transcript === "oficios") {
                fp();
            }
            if (transcript === "programación" || transcript === "programacion" || transcript === "programar" || transcript === "software" || transcript === "desarrollo" || transcript === "programa") {
                programacion();
            }
            if (transcript === "estudiar" || transcript === "estudios" || transcript === "estudiante" || transcript === "carrera" || transcript === "laboral" || transcript === "curso" || transcript === "cursos" || transcript === "trayecto" || transcript === "trayectos" || transcript === "corso" || transcript === "corsos") {
                estudiar();
            }
            if (transcript === "locura" || transcript === "fruta" || transcript === "bardo") {
                bardear();
            }
        }

        // show the closed captioned and remove after 3 seconds
        texto.textContent = transcript+" "+confidence;
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
        temperatura = getTemperatura()
        clima = getClima()
        hora = new Date().getHours()

        /* Opción para hardcodear */
        //temperatura=20
        //sensacionTermica=20
        //clima="Cielo Claro"

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
