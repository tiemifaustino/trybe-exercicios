const { expect } = require('chai');

const escreveArquivo = require('../escreveArquivo');

describe('Executa função escreveArquivo', () => {
  describe('a resposta', () => {
    it('é uma string', () =>{
      const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a ok', () =>{
      const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});