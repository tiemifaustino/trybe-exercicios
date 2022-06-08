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

// 4.2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
  const result = await fs.readFile(myFile, 'utf8');
  const arraySimpsons = JSON.parse(result);

  const simpson = arraySimpsons.find((simpson) => Number(simpson.id) === id);

  if (!simpson) {
    throw new Error('ID não encontrado');
  }

  return simpson;
}

async function main() {
  const simpson = await getSimpsonById(2);
  console.log(simpson);
}

main();

// 4.3 Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function filterSimpsons() {
  const result = await fs.readFile(myFile, 'utf8');
  const arraySimpsons = JSON.parse(result);

  const filteredSimpsons = arraySimpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile(myFile, JSON.stringify(filteredSimpsons));
  console.log('Retirado personagens com id 10 e 6');
}

async function main2() {
  await filterSimpsons();
}

main2();