let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let less = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < less) {
      less = numbers[i];
    }
  }

console.log(less);


/* 
1. descobrir o menor valor no array
2. fazer um for para percorrer o array
3. declarar uma variável com a primeira posição do array "[0]"
4. comparar cada item do array começando com o primeiro item para verificar qual é o menor valor (posiçãp "0" com posição "1")
5. se for o menor valor atribuir à variável "less" esse valor
6. imprimir a variável less que irá conter o menor valor
*/