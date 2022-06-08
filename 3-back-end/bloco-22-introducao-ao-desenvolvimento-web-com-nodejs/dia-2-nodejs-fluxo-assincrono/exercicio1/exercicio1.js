function exercicioPromise(par1, par2, par3) {
  const promise =  new Promise((resolve, reject) => {
    if (isNaN(par1) || isNaN(par2) || isNaN(par3)) reject(new Error("Informe apenas números"));

    const result = (par1 + par2) * par3;

    if (result < 50) {
      return reject(new Error("Valor muito baixo"));
    }

    resolve(result);
  });

  return promise;
}

// exercicioPromise(1, 2, 3)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(`Erro: ${err.message}`));

// exercicioPromise(10, 20, 30)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(`Erro: ${err.message}`));

// exercicioPromise('a', 20, 30)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(`Erro: ${err.message}`));


function getNumbers() {
  const par1 =  Math.floor(Math.random() * 100 + 1);
  const par2 =  Math.floor(Math.random() * 100 + 1);
  const par3 =  Math.floor(Math.random() * 100 + 1);

  exercicioPromise(par1, par2, par3)
    .then((result) => console.log('Resultado: %s', result))
    .catch((err) => console.log('Erro: %s', err));
}

getNumbers();


// Outra solução ************************************
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  // console.log(randomNumbers);

  return randomNumbers;
}

exercicioPromise(...callDoMath())
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message))