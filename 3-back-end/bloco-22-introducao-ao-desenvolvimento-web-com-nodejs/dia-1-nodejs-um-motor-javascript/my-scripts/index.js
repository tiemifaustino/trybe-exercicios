const BMI = require('./imc');
const readLine = require('readline-sync');

const weight = readLine.questionFloat('Qual seu peso? (em kg) ');
const height = readLine.questionInt('Qual sua altura? (em cm) ');
const result = BMI(weight, height).toFixed(2);

switch (true) {
  case (result < 18.5):
    console.log(`IMC: ${result} - Abaixo do peso (magreza)`);
    break;
  case (result >= 18.5 && result <= 24.9):
    console.log(`IMC: ${result} - Peso normal`);
    break;
  case (result >= 25 && result <= 29.9):
    console.log(`IMC: ${result} - Acima do peso (sobrepeso)`);
    break;
  case (result >= 30 && result <= 34.9):
    console.log(`IMC: ${result} - Obesidade grau I`);
    break;
  case (result >= 35 && result <= 39.9):
    console.log(`IMC: ${result} - Obesidade grau II`);
    break;
  default:
    console.log(`IMC: ${result} - Obesidade graus III e IV`);
}


// 3 - Executar com -> npm start
