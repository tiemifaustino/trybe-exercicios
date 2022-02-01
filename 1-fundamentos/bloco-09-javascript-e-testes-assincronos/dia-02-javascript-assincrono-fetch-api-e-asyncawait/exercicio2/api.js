async function fetchArrayCrypto() {
    const coins = await fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
    // o fetch retorna uma promise que contém o dado final que queremos acessar
    // se sucesso ele retorna o objeto JSON - .then((response) => response.json())
    // acesso à chave "data" do objeto JSON onde estão as moedas- .then((data) => data.data)
    // se falha "pegar" o erro e retorna uma string representando o objeto Error - .catch((error) => error.toString());

    return coins;
    // retorna um array de objetos, cada objeto é uma moeda
}

async function insertDOM() {
    const coins = await fetchArrayCrypto();
    // array de objetos contendo as moedas

    const topTen = coins.filter((element, index) => index < 10)
    // filtra somente as 10 primeiras moedas
    // outra forma = .filter((coin) => Number(coin.rank) <= 10)

    console.log(topTen);

    const coinList = document.getElementById('lista-crypto');
    // constante para armazenar a ul, onde serão inseridas as li 

    topTen.forEach((coin) => {
        // com o forEach ele percorre pela lista de moedas

        const newLi = document.createElement('li');
        // cria uma li para cada moeda

        const usdPrice = Number(coin.priceUsd);
        // converte em número o valor do preço de cada moeda pois o valor está como uma string

        newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
        // insere o texto para cada moeda, contendo o nome, símbolo e preço com 2 casas decimais

        coinList.appendChild(newLi);
        // adiciona um filho (li) na ul para cada moeda 
    });

}

window.onload = () => insertDOM();