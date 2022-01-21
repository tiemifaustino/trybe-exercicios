const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

/* Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
1 - Dada uma matriz, transforme em um array. */
function flatten() {
    // escreva seu código aqui
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
    // return arrays.reduce((acc, val) => [`${acc} ${val}`]);
    
}

console.log(flatten(arrays));