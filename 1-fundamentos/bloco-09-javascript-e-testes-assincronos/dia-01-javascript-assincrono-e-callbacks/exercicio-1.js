// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// 1-A, 2-B e 3-C

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

/* 5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura. */

/* 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha. */

// Gera um tempo aleatório
const messageDelay = () => Math.floor(Math.random() * 5000);

// Gera a temperatura de Marte
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// Converte temperatura Celsius para Fahrenheit
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// Temperatura em Fahrenheit
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// Temperatura em Celsius
const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// Função que gera a mensagem em caso de erro
const handleError = (errorReason) =>
console.log(`Error getting temperature: ${errorReason}`);


// definição da função sendMarsTemperature...

// Utiliza a função e declara numa variável a temperatura de Marte
// Utiliza as funções em Celsius e Fahrenheit como parâmetro 

const sendMarsTemperature = (callbackFunction, onError) => {
  // exercício 4 - return setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay());

  // exercício 5 - const currentTemperature = getMarsTemperature();
  // return setTimeout(() => callbackFunction(currentTemperature), messageDelay());

  // exercício 6 - taxa de sucesso de envio de mensagem de 60% por isso se o número aleatório for até 0.6 seria como se fosse os 60% de acerto
  const currentTemperature = getMarsTemperature();
  const randomNumberSixtyPercent = Math.random() <= 0.6;
  
  // Se o número aleatório for igual ou menor que 0.6 (se for true) retorna a temperatura se for false retorna mensagem de erro
  return setTimeout(() => randomNumberSixtyPercent ? callbackFunction(currentTemperature) : onError('Robot is busy!'), messageDelay());
};

// sendMarsTemperature();
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);