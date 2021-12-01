/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */

let fatorial = 10;

for(let i = 1; i <= 10; i += 1) {
    fatorial *= i;
}
console.log(fatorial);

// Fiz ao contrário, pois a multiplicação dá o mesmo resultado. Porém como são os antecessores, o código do "for" deve ser feito decrescente

/* for(let i = fatorial; i > 0; i -= 1) {
    fatorial *= i;
}
console.log(fatorial);
 */