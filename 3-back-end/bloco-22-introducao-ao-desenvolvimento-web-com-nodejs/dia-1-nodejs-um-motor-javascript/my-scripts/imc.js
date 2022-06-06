const weightKG = 75;
const heightInMeters = 1.65;

function calcBMI(weight, height) {
  
  const bmi = weight / (height ** 2);
  
  console.log(`Peso: ${weight}, Altura: ${height}`);
  console.log(`IMC: ${bmi.toFixed(2)}`);
}

calcBMI(weightKG, heightInMeters);

// Executar o script utilizando -> node imc.js 