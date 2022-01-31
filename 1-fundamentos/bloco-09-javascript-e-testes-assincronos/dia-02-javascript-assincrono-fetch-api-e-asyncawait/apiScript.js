function insertDOM(data) {
  const jokeContainer = document.getElementById('jokeContainer');

  jokeContainer.innerText = data.joke;
}

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json'}
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(insertDOM);
};

window.onload = () => fetchJoke();