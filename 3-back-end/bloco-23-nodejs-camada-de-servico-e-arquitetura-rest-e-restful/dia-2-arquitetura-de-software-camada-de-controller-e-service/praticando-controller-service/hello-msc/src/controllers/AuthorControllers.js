// controllers - middlewares

const Joi = require('joi');
const AuthorServices = require('../services/AuthorServices');

const getAll = async (_req, res) => {
  const authors = await AuthorServices.getAll();
  res.status(200).json(authors);
};

const findById =  async (req, res) => {
  const { id } = req.params;
  const author = await AuthorServices.findById(id);
  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);
  // Caso não haja nenhum erro, retornamos o author encontrado
  return res.status(200).json(author);
}

const createAuthor = async (req, res) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    contacts,
  } = req.body;
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    contacts: Joi.array().items(Joi.string().length(15).required()).min(1).required(),
  }).validate({ firstName, lastName, contacts }); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }
// Caso não haja erro de validação, prosseguimos com a criação da pessoa autora
const newAuthor = await AuthorServices.createAuthor(firstName, middleName, lastName, contacts);
// Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
if (newAuthor.error) return next(newAuthor.error);
// Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
// da nova pessoa autora
return res.status(201).json(newAuthor);
}

module.exports = {
  getAll,
  findById,
  createAuthor,
}