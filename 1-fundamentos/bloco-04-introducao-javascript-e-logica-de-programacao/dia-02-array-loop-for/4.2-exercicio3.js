let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1. Somar todos os elementos
// 2. Dividir a soma pelo total de elementos do array

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}

let media = 0;

for (let m = 0; m < numbers.length; m +=1) {
    media += 1;
}

console.log(sum / media);

// let media = sum / numbers.length;
// console.log(media);