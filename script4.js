// Deklarerer variabler til senere brug
let num1, num2, randomOperationValg, result;

// Funktion til at udføre en tilfældig matematisk operation
function forVoresUdregning() {
  // Genererer to tilfældige tal mellem 1 og 10 (+ 1)
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  // En liste i et array med mulige matematiske operationer
  const operations = ['+', '-', '*', '/', '%', '**'];
  
  // Vælger tilfældigt en af operationerne fra arrayet
  randomOperationValg = operations[Math.floor(Math.random() * operations.length)];

  // Udfører den valgte operation og gemmer resultatet i 'result' variablen
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

  // Opdaterer HTML-elementer med de genererede tal og resultatet
  const taskElement = document.getElementById('tal1');
  taskElement.textContent = `Tal 1: ${num1}`;
  const taskElement1 = document.getElementById('tal2');
  taskElement1.textContent = `Tal 2: ${num2}`;
  const taskElement2 = document.getElementById('resultat');
  taskElement2.textContent = ` Resultat: ${result}`;
}

// Funktion for at tjekke brugerens gæt
function tjekGæt() {
  // Henter brugerens gæt fra input-elementet med id 'brugerGæt'
  const userGuess = document.getElementById('brugerGæt').value;
  const resultTextElement = document.getElementById('resultatTekst');
  
  // Sammenligner brugerens gæt med den tilfældige operation
  if (userGuess === randomOperationValg) {
    resultTextElement.textContent = 'Dit gæt er korrekt!';
  } else {
    // Hvis gættet er forkert, vises det korrekte svar
    resultTextElement.textContent = `Dit gæt er forkert. Det korrekte svar var ${randomOperationValg}`;
  }
}

// Kalder funktionen 'forVoresUdregning' 
forVoresUdregning();
