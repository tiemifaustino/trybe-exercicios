const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
//   1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
// Adicione seu código aqui

emailListInData.forEach((element) => { showEmailList(element)});

emailListInData.forEach(showEmailList);