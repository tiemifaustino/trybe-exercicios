/* 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

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

leitor.nomeCompleto = leitor.nome + ' ' + leitor.sobrenome;
let primeiroLivroFavorito = leitor.livrosFavoritos[0];

// console.log(primeiroLivroFavorito['titulo']);

console.log('O livro favorito de ' + leitor.nomeCompleto + ' se chama "' + primeiroLivroFavorito['titulo'] + '"');

console.log('O livro favorito de ' + leitor.nomeCompleto + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');