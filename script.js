let score = 0;
let mistakes = 0;
let a, b;
let timer;
let timeLeft = 30;
let gameOver = false;

// === Генерация нового задания ===
function generateTask() {
  clearInterval(timer);
  timeLeft = 30;
  updateTimer();

  gameOver = false;
  document.getElementById('answer').disabled = false;
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';

  const level = Number(document.getElementById('level').value);
  const operation = Math.random() < 0.5 ? 'multiply' : 'divide';

  if (operation === 'multiply') {
    a = Math.floor(Math.random() * level) + 1;
    b = Math.floor(Math.random() * level) + 1;
    document.getElementById('task').textContent = `Сколько будет ${a} × ${b}?`;
    document.getElementById('task').dataset.answer = a * b;
  } else {
    b = Math.floor(Math.random() * level) + 1;
    const result = Math.floor(Math.random() * level) + 1;
    a = b * result;
    document.getElementById('task').textContent = `Сколько будет ${a} ÷ ${b}?`;
    document.getElementById('task').dataset.answer = result;
  }

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
    result.textContent = '💀 Игра окончена! Ты сделал 3 ошибки.';
    gameOver = true;
    clearInterval(timer);
    document.getElementById('answer').disabled = true;
    return;
  }

  setTimeout(generateTask, 1500);
}

function checkAnswer() {
  if (gameOver) return;

  const answerInput = document.getElementById('answer');
  const result = document.getElementById('result');
  const userAnswer = Number(answerInput.value);
  const correctAnswer = Number(document.getElementById('task').dataset.answer);

  if (userAnswer === correctAnswer) {
    result.textContent = '✅ Верно!';
    result.style.color = 'green';
    score++;
    answerInput.classList.add('correct');
  } else {
    result.textContent = '❌ Неверно!';
    result.style.color = 'red';
    mistakes++;
    answerInput.classList.add('wrong');
  }

  setTimeout(() => {
    answerInput.classList.remove('correct', 'wrong');
  }, 1000);

  document.getElementById('score').textContent = score;

  if (mistakes >= 3) {
    handleMistake('💀 Третья ошибка!');
  } else {
    generateTask();
  }
}

// === Сброс игры по кнопке ===
function resetGame() {
  score = 0;
  mistakes = 0;
  document.getElementById('score').textContent = score;
  generateTask();
}
