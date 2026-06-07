let api_key = "";

const btnMic = document.getElementById("btnMic");
const estado = document.getElementById("estado");
const chatWindow = document.getElementById("chat-window");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "es-AR";
recognition.continuous = false;
recognition.interimResults = false;

btnMic.addEventListener("click", () => {

    estado.innerHTML = "Escuchando...";

    recognition.start();
});

recognition.onresult = async (event) => {

    const texto = event.results[0][0].transcript;

    estado.innerHTML = "Consultando...";

    await consultarGroq(texto);
};

recognition.onerror = (e) => {

    estado.innerHTML = "Error: " + e.error;
};

async function consultarGroq(pregunta) {

    try {

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "qwen/qwen3-32b",

                    messages: [
                        {
                            role: "system",
                            content:
                                "Responde siempre en español."
                        },
                        {
                            role: "user",
                            content:
                                "/no_think\n\n" + pregunta
                        }
                    ],

                    temperature: 0.3
                })
            }
        );

        const data = await response.json();

        const respuesta =
            data.choices[0].message.content;

        mostrarMarkdown(respuesta);

        hablar(respuesta);

        estado.innerHTML = "Listo";

    } catch (error) {

        estado.innerHTML =
            "Error consultando API";

        console.error(error);
    }
}

function mostrarMarkdown(md) {

    chatWindow.innerHTML =
        marked.parse(md);

    chatWindow.scrollTop =
        chatWindow.scrollHeight;
}

function hablar(texto) {

    speechSynthesis.cancel();
    texto=texto.replaceAll('*', '');
    texto=texto.replaceAll('|', '');
    texto=texto.replaceAll('#', '');
    texto=texto.replaceAll('_', '');
    texto=texto.replaceAll('-', '');
    texto=texto.replaceAll('<think>', '')
    texto=texto.replaceAll('</think>', '')

    const utterance =
        new SpeechSynthesisUtterance(texto);

    utterance.lang = "es-AR";

    utterance.rate = 1.0;

    speechSynthesis.speak(utterance);
}

function callar(){
    speechSynthesis.cancel();
}

function borrar(){
    document.getElementById('chat-window').innerHTML=""
}

function cargar() {
    //console.log("Se cargaron elementos..")
    const claveReversa = [
        'K', 'N', 'L', 'y', '5', 'A', 'D', 'm', 'L', 'X', 'e', 'S', 'R', 'd', 'g',
        'c', 'b', 'B', '6', 'B', 'Q', 'v', 'I', 'I', 'Y', 'F', '3', 'b', 'y', 'd', 'G', 
        'W', 'u', 'W', 'z', '0', 'l', '6', 'g', 'q', 'g', 'I', '5', 'f', 'v', 'C', 'b', 
        'w', '0', '2', 'B', 'E', '_', 'k', 's', 'g'
    ];
    clave="";
    for(a=claveReversa.length-1; a>=0; a--){
        clave+=claveReversa[a]
    }
    api_key=clave
    //document.getElementById("api-key").value=clave
}