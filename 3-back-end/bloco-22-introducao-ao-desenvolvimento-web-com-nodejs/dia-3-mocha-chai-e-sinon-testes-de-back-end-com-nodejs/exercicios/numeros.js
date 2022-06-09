function numerosNaturais(num) {
  switch (true) {
    case (num > 0):
      return 'positivo';
      break;
    case (num < 0):
      return 'negativo';
      break;
    case (num === 0):
      return 'neutro';
      break;
    default:
      return num;
      break;
  }

}

module.exports = numerosNaturais;