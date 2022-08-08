// ./src/index.ts

// O index.ts simula algumas requisições que incrementam a quantidade de acessos à API utilizando o token especificado, por meio da função doSomeIncrements.

import Connector from './Connector';

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new Connector({
  host: 'mysqldb',
  port: 3306,
  database: 'counter',
  user: 'root',
  password: 'example'});

const main = (connector: Connector) => {
  connector.firstCount(token);

  // No começo de cada lote de requisições, ele loga a contagem atual com a função logCount.
  const logCount = async () => {
    try {
      const count = await connector.getCount(token);
      console.log(count);
    } catch (err) {
      console.error(err);
    }
  };

  // incrementa a quantidade de acessos à API utilizando o token especificado
  const doSomeIncrements = () => {
    logCount();
    connector.incrementCount(token);
    connector.incrementCount(token);
    connector.incrementCount(token);
  };
  
  // a função doSomeIncrements é chamada a cada 500 milissegundos por 10 vezes - Connector.ts - getCount
  const incrementsInterval = setInterval(doSomeIncrements, 500);

  // Por fim, é feito um log do último valor e, em seguida, o contador é limpo e a conexão é encerrada.
  setTimeout(() => {
    clearInterval(incrementsInterval);
    logCount();
    connector.clearCount(token);
    connector.closeConnection();
  }, 5500);
};

main(conn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/

// Para testar, rode o comando "npx ts-node src" no terminal bash do container.
