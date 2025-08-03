let score = 0;
let mistakes = 0;
let a, b;
let timer;
let timeLeft = 30;

// === Генерация нового задания ===
function generateTask() {
  clearInterval(timer); // Очищаем прошлый таймер
  timeLeft = 30;
  updateTimer();

  const level = Number(document.getElementById('level').value);
  a = Math.floor(Math.random() * level) + 1;
  b = Math.floor(Math.random() * level) + 1;

  document.getElementById('task').textContent = `Сколько будет ${a} × ${b}?`;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleMistake('⌛ Время вышло!');
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer').textContent = `⏳ ${timeLeft} сек`;
}

function handleMistake(message) {
  const result = document.getElementById('result');
  const scoreDisplay = document.getElementById('score');

  result.textContent = message;
  result.style.color = 'orange';
  mistakes++;
  score = 0;
  scoreDisplay.textContent = score;

  result.classList.remove('flash');
  void result.offsetWidth;
  result.classList.add('flash');

  if (mistakes >= 3) {
    result.textContent = '⚠️ Ты сделал 3 ошибки подряд. Попробуй ещё раз!';
    mistakes = 0;
  }

  setTimeout(generateTask, 1500);
}

function checkAnswer() {
  clearInterval(timer);
  const userAnswer = Number(document.getElementById('answer').value);
  const correctAnswer = a * b;

  const result = document.getElementById('result');
  const scoreDisplay = document.getElementById('score');

  if (userAnswer === correctAnswer) {
    result.textContent = '✅ Правильно!';
    result.style.color = 'green';
    score++;
    mistakes = 0;

    result.classList.remove('flash');
    void result.offsetWidth;
    result.classList.add('flash');
  } else {
    result.textContent = `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
    result.style.color = 'red';
    score = 0;
    mistakes++;
  }

  scoreDisplay.textContent = score;

  if (mistakes >= 3) {
    result.textContent = '⚠️ Ты сделал 3 ошибки подряд. Попробуй ещё раз!';
    mistakes = 0;
    score = 0;
    scoreDisplay.textContent = score;
  }

  setTimeout(generateTask, 1500);
}

generateTask();
document.getElementById('level').addEventListener('change', generateTask);
