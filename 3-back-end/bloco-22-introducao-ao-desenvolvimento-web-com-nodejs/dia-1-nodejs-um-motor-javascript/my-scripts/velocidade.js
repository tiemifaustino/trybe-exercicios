const readLine = require('readline-sync');

function calcAverageSpeed(distance, time) {
  const averageSpeed = distance / time;
  console.log(`Velocidade média: ${averageSpeed} m/s`);
  return averageSpeed;
}

const distance = readLine.questionInt('Qual a distância? (em metros) ');
const time = readLine.questionInt('Qual o tempo? (em segundos) ');
calcAverageSpeed(distance, time);

// Executar com -> npm run velocidade