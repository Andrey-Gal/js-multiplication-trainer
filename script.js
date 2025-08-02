// === Тренажер умножения ===

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
  if (userAnswer === correctAnswer) {
    result.textContent = '✅ Правильно!';
    result.style.color = 'green';
  } else {
    result.textContent = `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
    result.style.color = 'red';
  }

  setTimeout(generateTask, 1500); // Новый пример через 1.5 секунды
}

generateTask(); // Первый пример при загрузке
