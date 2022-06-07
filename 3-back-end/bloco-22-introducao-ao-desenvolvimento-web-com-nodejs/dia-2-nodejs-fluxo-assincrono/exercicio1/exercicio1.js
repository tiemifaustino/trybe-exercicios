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

exercicioPromise(1, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Erro: ${err.message}`));

exercicioPromise(10, 20, 30)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Erro: ${err.message}`));

exercicioPromise('a', 20, 30)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Erro: ${err.message}`));