let mistakes = 0;

// === Тренажер умножения ===
let score = 0;


let a, b;

function generateTask() {
  const level = Number(document.getElementById('level').value);
  a = Math.floor(Math.random() * level) + 1;
  b = Math.floor(Math.random() * level) + 1;

  document.getElementById('task').textContent = `Сколько будет ${a} × ${b}?`;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}


function checkAnswer() {
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
  result.style.color = 'orange';
  mistakes = 0;
  score = 0;
  scoreDisplay.textContent = score;

  result.classList.remove('flash');
  void result.offsetWidth;
  result.classList.add('flash');
}


  setTimeout(generateTask, 1500);
}




generateTask(); // Первый пример при загрузке

document.getElementById('level').addEventListener('change', generateTask);

