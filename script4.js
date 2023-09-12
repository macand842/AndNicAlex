let num1, num2, randomOperation, result;

function forVoresUdregning() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  const operations = ['+', '-', '*', '/', '%', '**'];
  randomOperationValg = operations[Math.floor(Math.random() * operations.length)];

  switch (randomOperationValg) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
  }

  const taskElement = document.getElementById('tal1');
  taskElement.textContent = `Tal 1: ${num1}`;
  const taskElement1 = document.getElementById('tal2');
  taskElement1.textContent = `Tal 2: ${num2}`;
  const taskElement2 = document.getElementById('resultat');
  taskElement2.textContent = ` Resultat: ${result}`;
}

function tjekGæt() {
  const userGuess = document.getElementById('brugerGæt').value;
  const resultTextElement = document.getElementById('resultatTekst');
  
  if (userGuess === randomOperationValg) {
    resultTextElement.textContent = 'Dit gæt er korrekt!';
  } else {
    resultTextElement.textContent = `Dit gæt er forkert. Det korrekte svar var ${randomOperationValg}`;
  }
}

forVoresUdregning();
