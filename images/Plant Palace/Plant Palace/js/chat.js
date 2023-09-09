document.addEventListener('DOMContentLoaded', function() {
  const chatDisplay = document.getElementById('chat-display');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
      displayMessage(userMessage, 'user');
      getBotResponse(userMessage);
      userInput.value = '';
    }
  }

  // Event listener for clicking the send button
  sendBtn.addEventListener('click', sendMessage);

  // Event listener for pressing the "Enter" key
  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });

function displayMessage(message, sender) {
  const messageWrapper = document.createElement('div');
  messageWrapper.className = 'chat-message';
  messageWrapper.classList.add(sender + '-message');
  messageWrapper.textContent = message;
  chatDisplay.appendChild(messageWrapper);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function getBotResponse(userMessage) {
  let botMessage = '';

  if (userMessage.toLowerCase().includes('how are you')) {
    botMessage = "I'm fine, thank you!";
  } else if (userMessage.toLowerCase().includes('hey')) {
      botMessage = "hello! how can i help you";
  }else if (userMessage.toLowerCase().includes('where can i find all the Plants')) {
    botMessage = "Check out our Plants page in navigation menu";
  } else if (userMessage.toLowerCase().includes('how can i Buy a Plant')) {
    botMessage = "You need to Navigate to the Products page";
  } else if (userMessage.toLowerCase().includes('help')) {
    botMessage = "Sure, I can assist you. How can I help?";
  } else if (userMessage.toLowerCase().includes('What is this about')) {
    botMessage = "Sure, I can assist you. How can I help?";
  }else if (userMessage.toLowerCase().includes('service')) {
      botMessage = "You need to Navigate to the service page";
  }else if (userMessage.toLowerCase().includes('about')) {
      botMessage = "You need to Navigate to the about page";
  }else if (userMessage.toLowerCase().includes('buy')) {
      botMessage = "You need to Navigate to the nursery page";
  }else {
    botMessage = 'You said: "' + userMessage + '". That sounds interesting!';
  }

  setTimeout(function() {
    displayMessage(botMessage, 'bot');
  }, 500);
}

// Additional code for predefined questions
const question1Btn = document.getElementById('question1-btn');
const question2Btn = document.getElementById('question2-btn');

question1Btn.addEventListener('click', function() {
  const question1 = question1Btn.textContent;
  displayMessage(question1, 'user');
  getBotResponse(question1);
});

question2Btn.addEventListener('click', function() {
  const question2 = question2Btn.textContent;
  displayMessage(question2, 'user');
  getBotResponse(question2);
});
});

let chatbotVisible = false;

function toggleChatbot() {
const chatContainer = document.getElementById('chat-container');
chatContainer.style.display = chatbotVisible ? 'none' : 'block';
chatbotVisible = !chatbotVisible;
}

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
