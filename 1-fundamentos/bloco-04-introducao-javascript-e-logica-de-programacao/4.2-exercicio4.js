// 1. Somar todos os elementos
// 2. Dividir a soma pelo total de elementos do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}

let media = sum / numbers.length;
console.log(media);

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

