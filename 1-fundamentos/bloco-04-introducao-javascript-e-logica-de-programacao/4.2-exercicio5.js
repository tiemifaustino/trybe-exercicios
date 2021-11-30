// Utilizando for , descubra qual o maior valor contido no array e imprima-o
// 1. Declarou a 1ª posição do array "let maior = numbers[0]"
// 2. Comparar cada posição do array a partir da posição 1 (Pq a posição 0 já está declarada na variável "maior") com a variável "maior"
// 3. Se o número da posição do "for" for maior do que o nº que está dentro da variável "maior" ele vai ocupar o valor da variável "maior"
// 4. Após a repetição, fica o maior nº dentro da variável "maior"
// 5. Imprime a variável "maior"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}

console.log(maior);