async function fetchArrayCrypto() {
    const coins = await fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
    
    console.log(coins);
}

fetchArrayCrypto();