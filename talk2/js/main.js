
// =====================================
// CONFIGURACION
// =====================================
let api_key = "";

const MODEL = "qwen/qwen3-32b";

const WAKE_WORDS = [
    "hola asistente",
    "hola groq",
    "frida",
    "¿frida"
];

// =====================================
// ELEMENTOS HTML
// =====================================

const btnMic = document.getElementById("btnMic");
const btnMute = document.getElementById("btnMute");
const btnClear = document.getElementById("btnClear");

const estado = document.getElementById("estado");
const chatWindow = document.getElementById("chat-window");

// =====================================
// VARIABLES GLOBALES
// =====================================

let recognition = null;

let escuchando = false;
let hablando = false;

// estados:
// wakeword
// question
// processing

let modo = "wakeword";

let watchdog = null;

// =====================================
// INICIO
// =====================================

window.addEventListener("load", () => {

    inicializarSpeech();

    configurarBotones();

});

// =====================================
// BOTONES
// =====================================

function configurarBotones() {

    btnMic.addEventListener(
        "click",
        toggleMicrofono
    );

    btnMute.addEventListener(
        "click",
        callar
    );

    btnClear.addEventListener(
        "click",
        limpiarChat
    );
}

// =====================================
// SPEECH RECOGNITION
// =====================================

function inicializarSpeech() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        estado.innerText =
            "SpeechRecognition no soportado";

        return;
    }

    recognition =
        new SpeechRecognition();

    recognition.lang = "es-AR";

    recognition.continuous = true;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    configurarEventosSpeech();
}

function configurarEventosSpeech() {

    recognition.onstart = () => {

        actualizarEstado(
            "🎤 Escuchando..."
        );
    };

    recognition.onend = () => {

        if (
            escuchando &&
            !hablando
        ) {

            setTimeout(() => {

                try {

                    recognition.start();

                }
                catch (e) {}

            }, 1000);
        }
    };

    recognition.onerror = (event) => {

        console.log(
            "Speech Error:",
            event.error
        );

        actualizarEstado(
            "Error: " +
            event.error
        );
    };

    recognition.onresult =
        async (event) => {

            if (hablando)
                return;

            const texto =
                event.results[
                    event.results.length - 1
                ][0]
                .transcript
                .trim()
                .toLowerCase();

            console.log(
                "Escuchado:",
                texto
            );

            procesarTexto(texto);
        };
}

// =====================================
// PROCESAMIENTO DE VOZ
// =====================================

function procesarTexto(texto) {

    // ------------------
    // Esperando wakeword
    // ------------------

    if (
        modo === "wakeword"
    ) {

        const activado =
            WAKE_WORDS.some(
                palabra =>
                    texto.includes(
                        palabra
                    )
            );

        if (!activado)
            return;

        modo = "question";

        recognition.stop();

        hablar(
            "Te escucho"
        );

        return;
    }

    // ------------------
    // Esperando pregunta
    // ------------------

    if (
        modo === "question"
    ) {

        modo =
            "processing";

        recognition.stop();

        consultarGroq(
            texto
        );

        return;
    }
}

// =====================================
// MICROFONO
// =====================================

function toggleMicrofono() {

    if (
        !escuchando
    ) {

        iniciarMicrofono();

    } else {

        detenerMicrofono();
    }
}

function iniciarMicrofono() {

    escuchando = true;

    try {

        recognition.start();

    }
    catch (e) {}

    iniciarWatchdog();

    btnMic.innerHTML =
        "⏹️ Desactivar Mic";

    btnMic.classList.remove(
        "btn-success"
    );

    btnMic.classList.add(
        "btn-secondary"
    );

    actualizarEstado(
        "Esperando activación..."
    );
}

function detenerMicrofono() {

    escuchando = false;

    clearInterval(
        watchdog
    );

    try {

        recognition.stop();

    }
    catch (e) {}

    btnMic.innerHTML =
        "🎤 Activar Micrófono";

    btnMic.classList.remove(
        "btn-secondary"
    );

    btnMic.classList.add(
        "btn-success"
    );

    actualizarEstado(
        "Micrófono apagado"
    );
}

// =====================================
// WATCHDOG
// =====================================

function iniciarWatchdog() {

    clearInterval(
        watchdog
    );

    watchdog =
        setInterval(() => {

            if (
                !escuchando
            )
                return;

            if (
                hablando
            )
                return;

            console.log(
                "Reinicio preventivo"
            );

            try {

                recognition.stop();

            }
            catch (e) {}

        }, 60000);
}

// =====================================
// GROQ
// =====================================

async function consultarGroq(
    pregunta
) {

    actualizarEstado(
        "Consultando IA..."
    );

    try {

        const response =
            await fetch(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    method:
                        "POST",

                    headers: {

                        "Authorization":
                            `Bearer ${api_key}`,

                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            model:
                                MODEL,

                            messages: [

                                {
                                    role:
                                        "system",

                                    content:
                                        "Responde siempre en español."
                                },

                                {
                                    role:
                                        "user",

                                    content:
                                        "/no_think\n\n" +
                                        pregunta
                                }
                            ],

                            temperature:
                                0.3
                        })
                }
            );

        const data =
            await response.json();

        const respuesta =
            data.choices[0]
                .message.content;

        mostrarMarkdown(
            respuesta
        );

        hablar(
            respuesta
        );
    }
    catch (error) {

        console.error(
            error
        );

        modo =
            "wakeword";

        actualizarEstado(
            "Error consultando Groq"
        );
    }
}

// =====================================
// MARKDOWN
// =====================================

function mostrarMarkdown(
    markdown
) {

    const html =
        DOMPurify.sanitize(
            marked.parse(
                markdown
            )
        );

    chatWindow.innerHTML =
        html;

    chatWindow.scrollTop =
        chatWindow.scrollHeight;
}

// =====================================
// VOZ
// =====================================

function hablar(texto) {

    hablando = true;

    speechSynthesis.cancel();

    const voz =
        new SpeechSynthesisUtterance(
            texto
        );

    voz.lang = "es-AR";

    voz.rate = 1;

    voz.pitch = 1;

    voz.volume = 1;

    voz.onstart = () => {

        actualizarEstado(
            "🔊 Hablando..."
        );
    };

    voz.onend = () => {

        hablando = false;

        if (
            modo === "question"
        ) {

            actualizarEstado(
                "Esperando pregunta..."
            );

            setTimeout(() => {

                try {

                    recognition.start();

                }
                catch (e) {}

            }, 500);

            return;
        }

        modo =
            "wakeword";

        actualizarEstado(
            "Esperando activación..."
        );

        if (
            escuchando
        ) {

            setTimeout(() => {

                try {

                    recognition.start();

                }
                catch (e) {}

            }, 1000);
        }
    };

    speechSynthesis.speak(
        voz
    );
}

// =====================================
// UTILIDADES
// =====================================

function callar() {

    speechSynthesis.cancel();

    hablando = false;

    actualizarEstado(
        "Voz detenida"
    );
}

function limpiarChat() {

    chatWindow.innerHTML =
        "";
}

function actualizarEstado(
    texto
) {

    estado.innerText =
        texto;
}

function cargar() {
    //console.log("Se cargaron elementos..")
    const claveReversa = [
        'K', 'N', 'L', 'y', '5', 'A', 'D', 'm', 'L', 'X', 'e', 'S', 'R', 'd', 'g',
        'c', 'b', 'B', '6', 'B', 'Q', 'v', 'I', 'I', 'Y', 'F', '3', 'b', 'y', 'd', 'G',
        'W', 'u', 'W', 'z', '0', 'l', '6', 'g', 'q', 'g', 'I', '5', 'f', 'v', 'C', 'b',
        'w', '0', '2', 'B', 'E', '_', 'k', 's', 'g'
    ];
    clave = "";
    for (a = claveReversa.length - 1; a >= 0; a--) {
        clave += claveReversa[a]
    }
    api_key = clave
    //document.getElementById("api-key").value=clave
}