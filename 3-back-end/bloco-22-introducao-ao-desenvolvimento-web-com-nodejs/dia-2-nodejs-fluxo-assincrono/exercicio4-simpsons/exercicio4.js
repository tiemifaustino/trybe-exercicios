// 4.1 Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

const myFile = 'simpsons.json';

async function read() {
  try {
    const result = await fs.readFile(myFile, 'utf8');

    // Converte o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`
    const arraySimpsons = JSON.parse(result);

    // Mapeia cada objeto do array para uma string no formato "id - nome"
    arraySimpsons.map((item) => {
      console.log(`${item.id} - ${item.name}`);
    })
  } catch (error) {
    console.log(error);
  }
}

read();