function numerosNaturais(num) {
  switch (true) {
    case (num > 0):
      return 'positivo';
    case (num < 0):
      return 'negativo';
    case (isNaN(num)):
      return 'o valor deve ser um número';
    default:
      return 'neutro';
  }
}

module.exports = numerosNaturais;