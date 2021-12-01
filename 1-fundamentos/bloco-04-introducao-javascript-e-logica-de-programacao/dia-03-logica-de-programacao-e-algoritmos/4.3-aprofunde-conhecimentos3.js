// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > biggestWord.length) {
        biggestWord = array[i];
    }
    if (array[i].length < smallestWord.length) {
        smallestWord = array[i];
    }
}
console.log(biggestWord);
console.log(smallestWord);

// 1. Maior e menor palavra, comparar o tamanho de cada string
// 2. Declarar uma variável para armazenar a maior e outra para armazenar a menor palavra
// 3. Começar com a primeira string atribuindo na variável "biggestWord" e "smallestWord" (posição 0)
// 4. Comparar cada tamanho de string com o tamanho de string que está na variável respectiva
// 5. If/else se for maior, atribuir à variável "biggestWord", se for menor atribuir à variável "smallestword"
// 6. Imprimir a variável "biggestWord" e "smallestword"