
const apiKeyInput = document.getElementById('api-key');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');
const URL = 'https://api.groq.com/openai/v1/chat/completions'
let apiKey = '';

apiKeyInput.addEventListener('input', (e) => {
    //apiKey = e.target.value.trim();
    //sendButton.disabled = !apiKey;
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendButton.disabled) {
        sendMessage();
    }
});

function borrar(){
    chatWindow.innerText=""
}

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage("yo - "+message, true);
    userInput.value = '';
    sendButton.disabled = true;
    apiKey=document.getElementById("api-key").value.trim()
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                //model: 'gpt-3.5-turbo',
                //model: 'gpt-4.1',
                model: 'openai/gpt-oss-20b',
                //max_completion_tokens: 500,
                messages: [{ role: 'user', content: message }]
            })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        const aiReply = data.choices[0].message.content.trim();
        addMessage("chatbot - "+aiReply, false);
    } catch (error) {
        addMessage('Error: ' + error.message, false);
    } finally {
        sendButton.disabled = false;
    }
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
    document.getElementById("api-key").value=clave
}