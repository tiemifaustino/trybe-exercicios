// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  const divisibleNumber = array.find((element) => element % 3 === 0 && element % 5 === 0);
  return divisibleNumber;
  // ou como no gabarito:
  // return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  // LEMBRAR de colocar o return!!!
}

console.log(findDivisibleBy3And5(numbers));



// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  return array.find((element) => element.length === 5); 
}

console.log(findNameWithFiveLetters(names));



// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((song) => song.id === id);
  }
  
  console.log(findMusic('31031685'))
