const BMI = require('./imc');
const readLine = require('readline-sync');

const weight = readLine.questionFloat('Qual seu peso? (em kg) ');
const height = readLine.question('Qual sua altura? (em metros) ');

BMI(weight, height);

// 3 - Executar com npm start
