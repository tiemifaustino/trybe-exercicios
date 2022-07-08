// services

const AuthorModels = require('../models/AuthorModels');

const getAll = async () => AuthorModels.getAll();

const findById = async (id) => {
  const author = await AuthorModels.findById(id);
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }
  return author;
};

const createAuthor = async (firstName, middleName, lastName, contacts) => {
  const existingAuthor = await AuthorModels.findByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  const { id } = await Author.createAuthor(firstName, middleName, lastName);

  //  O que mudou em nosso createAuthor, foi que recebemos mais um parâmetro contendo os contatos da pessoa autora e depois fizemos um map adicionando-os na tabela contacts 
  await Promise.all(contacts.map((contact) => Contact.createContact(id, contact)));

  return ({ id, firstName, middleName, lastName, contacts });

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // return AuthorModels.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};