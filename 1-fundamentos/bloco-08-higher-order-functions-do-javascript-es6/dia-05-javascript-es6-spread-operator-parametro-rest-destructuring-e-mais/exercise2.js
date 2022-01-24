// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const sum = (...numbersElements) =>  
  numbersElements
  .reduce((accumulator, current) => accumulator + current);

console.log(sum(2, 3, 5));