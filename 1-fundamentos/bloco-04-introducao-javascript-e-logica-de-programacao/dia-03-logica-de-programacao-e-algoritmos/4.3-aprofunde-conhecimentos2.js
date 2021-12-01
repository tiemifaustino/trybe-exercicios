/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';

let reverse = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    reverse = reverse + word[i];
}
console.log(reverse);

// 1. Declarar uma variável para armazenar a palavra invertida (reverse)
// 2. Fazer um "for" para rodar de forma decrescente na string word ( -= 1 )
        // a condição de início é a última posição da string que é o tamanho total - 1
        // a condição de parada é até ser maior ou igual a zero (primeira posição da string)
// 3. Adicionar na variável "reverse" cada letra (posição da letra na string) para ir concatenando
// 4. Imprimir a variável "reverse" com a palavra invertida
console.log(word.length);
console.log(word[1]);

/* GABARITO
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

GABARITO OUTRA SOLUÇÃO
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord); */