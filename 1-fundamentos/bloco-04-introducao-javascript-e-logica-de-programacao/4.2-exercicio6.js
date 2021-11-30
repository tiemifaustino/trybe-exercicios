/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
// Fiz como se fosse para listar os números ímpares existentes no array "numbers". Conforme o gabarito era para contar a quantidade, o número de valores ímpares que no total é 6.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [6, 8, 4, 18, 70, 8, 100, 2, 36, 20];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);    
    }
}

if (oddNumbers.length > 0) {
    console.log(oddNumbers);
} else {
    console.log("nenhum valor ímpar encontrado");
}

// 1. Verificar se o nº é ímpar (Se o resto % 2 for === 0 é par o contrário é ímpar)
// 2. Declarar uma variável vazia para armazenar o array
// 3. Se for ímpar adicionar o nº na variável "oddNumbers"
// 4. Comparar se o tamanho total do array for maior que 0, imprimir o array "oddNumbers" ao contrário imprimir "nenhum valor ímpar encontrado"


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
} */