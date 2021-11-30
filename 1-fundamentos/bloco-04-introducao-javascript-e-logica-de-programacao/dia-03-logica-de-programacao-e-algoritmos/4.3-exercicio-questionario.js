const n = 9;

let resultado = 100;
for (let i = 0; i <= n; i += 1) {
    resultado -= i;
}
console.log(resultado);

/* 
Qual o nº da constante para dar resultado 55? (8 ,9 ou 10)?
o for vai rodar e sempre subtrair 1
Na 1ª ele subtrai 100 - 1 = 99
Na 2ª ele subtrai 99 - 2 = 97
Na 3º ele subtrai 97 - 3 =  94
*/
