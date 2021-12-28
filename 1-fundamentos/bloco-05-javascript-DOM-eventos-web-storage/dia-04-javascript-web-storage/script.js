// LOCALSTORAGE - localStorage

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToLocalStorage() {
  // atribui a uma constante a conversao do JSON em objeto
  const oldList = JSON.parse(localStorage.getItem('phrases'));

  // atribui a uma constante o valor do input
  const phraseText = input.value;

  // adiciona no oldList (objeto e como um array) o valor do input
  oldList.push(phraseText);

  // salva no localStorage a chave phrases com o valor da oldList convertido em JSON
  localStorage.setItem('phrases', JSON.stringify(oldList));

  insertPhraseInDOM();

  // limpa o input
  input.value = '';
};

function insertPhraseInDOM() {

  // atribui a uma constante a conversao do JSON em objeto (igual ao oldList na funcao anterior)
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));

  // atribuir a ultima posicao do array a constante listLength
  const listLength = phrasesList.length - 1;

  // atribuir o valor da ultima posicao do array a constante phraseText
  const phraseText = phrasesList[listLength];

  // criar um elemento li declarado na constante phrase
  const phrase = document.createElement('li');

  // atribuir o valor da ultima posicao do array (const phraseText) dentro da li criada
  phrase.innerText = phraseText;

  // adicionar o filho li na lista de frases
  list.appendChild(phrase);
};

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
    // se a chave phrases nao existir, gravar a array vazia na chave phrases

  } else {

    // se nao, (se a chave phrases existir) atribuir o valor que esta salvo no localStorage da chave phrases na constante phrasesList (que se comporta como array)
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));

    // atribuir a ultima posicao do array a constante listLength
    const listLength = phrasesList.length - 1;

    // looping para percorrer ate o tamanho da listLength que e o tamanho da array phrasesList
    for (let index = 0; index <= listLength; index += 1) {

      // a cada looping, criar um elemento li declarado na constante listElement
      const listElement = document.createElement('li');

      // a cada looping, atribuir ao elemento li o texto do valor de cada item do array (que esta dentro do phrasesList [o que estava salvo no local storage])
      listElement.innerText = phrasesList[index];

      // a cada looping, adicionar o filho li na lista de frases
      list.appendChild(listElement);
    };
  };
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};


// SESSIONSTORAGE - sessionStorage
// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function addPhraseToSessionStorage() {
//   if (sessionStorage.getItem('phrases') === null) {
//     sessionStorage.setItem('phrases', JSON.stringify([]));
//   }
//   const oldList = JSON.parse(sessionStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// };

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// };

// button.addEventListener('click', addPhraseToSessionStorage);