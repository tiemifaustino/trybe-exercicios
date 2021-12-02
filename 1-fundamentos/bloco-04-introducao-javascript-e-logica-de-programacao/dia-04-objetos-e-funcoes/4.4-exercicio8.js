/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push(
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
  },
)

console.log(leitor.nome + ' tem '+ leitor.livrosFavoritos.length + ' livros favoritos');

if (leitor.livrosFavoritos.length < 2) {
  console.log(leitor.nome + ' tem '+ 1 + ' livro favorito');
} else {
  console.log(leitor.nome + ' tem '+ leitor.livrosFavoritos.length + ' livros favoritos');
}
