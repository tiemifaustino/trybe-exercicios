/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const objectGenerator = (fullName) => {
   const email = fullName.toLowerCase().split(' ').join('_');
   return {
       fullName,
       email: `${email}@trybe.com`
   };
}
console.log(objectGenerator('Tiemi Faustino'));
// { fullName: 'Tiemi Faustino', email: 'tiemi_faustino@trybe.com' }

const newEmployees2 = (objectGenerator) => {
    const employees = {
      id1: objectGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: objectGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: objectGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees2(objectGenerator));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(objectGenerator));
/*
  {
    id1: { fullName: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
    id2: { fullName: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
    id3: { fullName: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
  } 
  */
