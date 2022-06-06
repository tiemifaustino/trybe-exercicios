// const weightKG = 75;
// const heightInMeters = 1.65;

function calcBMI(weight, height) {
  console.log(`Peso: ${weight} kg, Altura: ${height} cm`);
  
  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters ** 2);
  
  // console.log(`IMC: ${bmi.toFixed(2)}`);

  return bmi;
}

// calcBMI(weightKG, heightInMeters);

module.exports = calcBMI;

// 1 - Executar o script utilizando -> node imc.js 

/*
no package.json :

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node index.js", ---> 2 - Executa com -> npm run imc
  "imc": "node imc.js"
},

*/
