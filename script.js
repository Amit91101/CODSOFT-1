document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        addMessage(userMessage, 'user-message');
        userInput.value = '';
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => addMessage(botResponse, 'bot-message'), 500);
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello! How can I help you today?';
        }
        if (lowerCaseMessage.includes('how are you')) {
            return 'I am just a bot, but I am functioning as expected!';
        }
        if (lowerCaseMessage.includes('what is your name')) {
            return 'I am a simple rule-based chatbot.';
        }
        if (lowerCaseMessage.includes('bye')) {
            return 'Goodbye! Have a great day!';
        }

        return 'I am sorry, I do not understand your question.';
    }
});
