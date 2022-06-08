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


async function getNumbers() {
  const par1 =  Math.floor(Math.random() * 100 + 1);
  const par2 =  Math.floor(Math.random() * 100 + 1);
  const par3 =  Math.floor(Math.random() * 100 + 1);

  try {
    const result = await exercicioPromise(par1, par2, par3);
    console.log('Resultado: %s', result);
  } catch (error) {
    console.log('Erro: %s', error);
  }

}

getNumbers();