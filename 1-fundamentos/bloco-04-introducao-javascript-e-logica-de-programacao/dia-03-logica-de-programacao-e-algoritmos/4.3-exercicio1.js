let n = 4;

let quadrado = "";
for (let coluna = 0; coluna < n; coluna += 1) {
    for (let linha = 0; linha < n; linha += 1) {
        quadrado += "*";
        console.log(quadrado);
    }
}