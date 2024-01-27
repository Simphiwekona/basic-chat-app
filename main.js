let chatMessage = [];

function renderChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';

    chatMessage.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
    })
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        chatMessage.push(message);
        renderChat();
        messageInput.value = '';
    }
}

document.getElementById('message-input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

renderChat();

// Login function 
async function login() {
    

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch('users.json');
    const data = await response.json();
    const users = data.users;

    const isValidUser = users.some(user => user.username
        === username && user.password === password);

    if (isValidUser) {
        errorMessage.textContent = '';
        alert('Login succesful!');
        window.location.href = "/chat.html"
    } else {
        errorMessage.textContent = 'Invalid username or password'
    }
}

document.getElementById('login-form').addEventListener('submit', login);