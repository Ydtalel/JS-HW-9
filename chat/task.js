const sarcasticPhrases = [
  "О, конечно, я рад помочь вам с вашей «сложной» проблемой.",
  "Возможно, ваш вопрос и прост, но я обещал ответить на 42 других вопроса сначала!",
  "Отвечаю на вопросы только в праздники и выходные. Загляните позже!",
  "Какая прекрасная возможность поразбираться во всех этих маленьких деталях!",
  "Очень интересно, вам кажется, что это что-то сложное?",
  "Я просто ожидаю с нетерпением, чтобы решить еще одну ваших проблем!",
  "Вы такой умный, что мне понадобится время, чтобы все понять!",
  "Это же настолько оригинальный вопрос, как никак!",
  "Извините, но я всего лишь бот, а не волшебник. Чтобы магия случилась, надо кликнуть мышкой три раза!",
  "Вам действительно нужна моя помощь в таком вопросе?",
  "Пока вы печатаете свой вопрос, я успеваю сходить за попкорном!",
];

const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const messageText = document.querySelector('.chat-widget__input');
let isChatFocused = false;
let idleTimer = null;

chat.addEventListener('click', (e) => {
  e.currentTarget.classList.add('chat-widget_active');
  startidleTimer();
});

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

messageText.addEventListener('focus', () => {
  isChatFocused = true;
});

messageText.addEventListener('blur', () => {
  isChatFocused = false;
});

function startidleTimer() {
  stopidleTimer(); 
  idleTimer = setInterval(() => {
    if (isChatFocused) {
      const botQuestion = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)];
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">${botQuestion}</div>
        </div>
      `;
    }
  }, 30000);
}

function stopidleTimer() {
  if (idleTimer) {
    clearInterval(idleTimer);
    idleTimer = null;
  }
}

messageText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && messageText.value) {
    let clientMessage = messageText.value;
    let botMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)];
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${clientMessage}</div>
      </div>
    `;
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${botMessage}</div>
    </div>
    `;
    messageText.value = '';
  }
});