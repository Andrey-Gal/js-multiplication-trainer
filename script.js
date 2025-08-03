// === Тренажер умножения ===
let score = 0;


let a, b;

function generateTask() {
  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
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

    result.classList.remove('flash');
void result.offsetWidth; // Хитрый трюк для перезапуска анимации
result.classList.add('flash');

  } else {
  result.textContent = `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
  result.style.color = 'red';

  result.classList.remove('flash');
  void result.offsetWidth;
  result.classList.add('flash');

  score = 0;
}


  scoreDisplay.textContent = score;

  setTimeout(generateTask, 1500); // Новый пример через 1.5 секунды
}


generateTask(); // Первый пример при загрузке


