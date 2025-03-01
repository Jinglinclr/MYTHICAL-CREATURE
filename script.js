let score = 0;

function nextQuestion(questionNumber, points) {
  score += points;

  const currentDiv = document.getElementById(`question-${questionNumber}`);
  currentDiv.classList.remove('active');

  const nextDiv = document.getElementById(`question-${questionNumber + 1}`);
  if (nextDiv) {
    nextDiv.classList.add('active');
  } else {
    showResult();
  }
}

function showResult() {
  let resultId;

  if (score >= 90) resultId = 'result1';
  else if (score >= 80) resultId = 'result2';
  else if (score >= 70) resultId = 'result3';
  else if (score >= 60) resultId = 'result4';
  else if (score >= 50) resultId = 'result5';
  else if (score >= 40) resultId = 'result6';
  else if (score >= 30) resultId = 'result7';
  else if (score >= 20) resultId = 'result8';
  else if (score >= 10) resultId = 'result9';
  else resultId = 'result10';


  document.querySelectorAll('.question').forEach(div => div.classList.remove('active'));


  const resultDiv = document.getElementById(resultId);
  if (resultDiv) {
    resultDiv.classList.add('active');
  }
}

