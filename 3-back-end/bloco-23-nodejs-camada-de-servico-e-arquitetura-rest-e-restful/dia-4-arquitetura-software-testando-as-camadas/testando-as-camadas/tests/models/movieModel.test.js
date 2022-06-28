const sinon = require('sinon');
const { expect } = require('chai');

// Para executar o teste: "npm test" ou
// especificamente: "NAME=movieModel npm test"

const connection = require('../../src/models/connection');
const MoviesModel = require('../../src/models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste
    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });

  });
});