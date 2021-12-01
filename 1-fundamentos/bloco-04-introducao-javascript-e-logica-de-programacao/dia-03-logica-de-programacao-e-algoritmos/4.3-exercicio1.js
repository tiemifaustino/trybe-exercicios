let n = 5;

for (let coluna = 0; coluna < n; coluna += 1) {
    let quadrado = "";
        for (let linha = 0; linha < n; linha += 1) {
        quadrado += "*";  
    }
    console.log(quadrado); 
}

/* 
1. Fazer um "for" para rodar a quantidade de vezes do valor "n"
2. Declarar uma variável com string vazia para armazenar os asteriscos dentro desse "for"
3. Fazer outro "for" dentro do 1º "for" para repetir a quantidade de asteriscos até o valor de "n", isso irá fazer uma linha com a quantidade do valor de "n"
4. Após o "for" que está dentro rodar a quantidade de vezes de "n" ele irá pro "for" de fora e irá executar o comando que está dentro do "for" de fora, imprimindo uma linha
5.Após ele imprimir uma linha, ele executa novamente "n" vezes o "for" de dentro e imprime outra linha, e depois repete o ciclo até o numero "n" de vezes 
6. O processo do "for" de fora irá ser executado "n" vezes imprimindo assim várias linhas até o valor de "n"
*/