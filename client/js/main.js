
const apiKeyInput = document.getElementById('api-key');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');
//const URL='https://api.openai.com/v1/chat/completions'
const URL='https://api.groq.com/openai/v1/chat/completions'
let apiKey = '';

apiKeyInput.addEventListener('input', (e) => {
    apiKey = e.target.value.trim();
    sendButton.disabled = !apiKey;
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendButton.disabled) {
        sendMessage();
    }
});

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

    addMessage(message, true);
    userInput.value = '';
    sendButton.disabled = true;

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
        addMessage(aiReply, false);
    } catch (error) {
        addMessage('Error: ' + error.message, false);
    } finally {
        sendButton.disabled = false;
    }
}