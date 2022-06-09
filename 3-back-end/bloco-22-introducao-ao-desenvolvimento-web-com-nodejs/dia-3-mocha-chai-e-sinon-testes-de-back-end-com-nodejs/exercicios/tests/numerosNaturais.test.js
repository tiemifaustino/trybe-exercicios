const { expect } = require('chai');

const numerosNaturais = require('../numeros');

describe('Executa a função numerosNaturais', () => {
  describe('quando o número for maior que 0', () => {
    it('é uma string', () =>{
      const resposta = numerosNaturais(8);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "positivo"', () =>{
      const resposta = numerosNaturais(8);

      expect(resposta).to.be.equals('positivo');
    });
  });

  describe('quando o número for menor que 0', () => {
    it('é uma string', () =>{
      const resposta = numerosNaturais(-1);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "negativo"', () =>{
      const resposta = numerosNaturais(-1);

      expect(resposta).to.be.equals('negativo');
    });
  });

  describe('quando o número for igual a 0', () => {
    it('é uma string', () =>{
      const resposta = numerosNaturais(0);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "neutro"', () =>{
      const resposta = numerosNaturais(0);

      expect(resposta).to.be.equals('neutro');
    });
  });

  describe('quando parâmetro não for número', () => {
    it('a resposta é uma string', () =>{
      const resposta = numerosNaturais("I'm not a number");

      expect(resposta).to.be.a('string');
    });

    it('a resposta retorna mensagem', () =>{
      const resposta = numerosNaturais("I'm not a number");

      expect(resposta).to.be.equals('o valor deve ser um número');
    });
  });

});