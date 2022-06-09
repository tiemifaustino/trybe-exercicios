const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const escreveArquivo = require('../escreveArquivo');

const conteudoDoArquivo = '#vqv conteúdo';

describe('Executa função escreveArquivo', () => {
  describe('a resposta', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').returns(conteudoDoArquivo);
    })
    after(() => {
      fs.writeFile.restore();
    })

    // como a função é assíncrona, os testes precisam ser assíncronos também (async/await)
    it('é uma string', async () =>{
      const resposta = await escreveArquivo('arquivo.txt', conteudoDoArquivo);

      expect(resposta).to.be.a('string');
    });

    it('é igual a ok', async () =>{
      const resposta = await escreveArquivo('arquivo.txt', conteudoDoArquivo);

      expect(resposta).to.be.equals('ok');
    });
  });
});