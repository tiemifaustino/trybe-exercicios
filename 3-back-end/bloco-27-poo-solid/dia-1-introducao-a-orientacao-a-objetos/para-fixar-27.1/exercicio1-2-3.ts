class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c
  }

  turnOn():void  {
    console.log(`Televisão ${this._brand}, ${this._size} polegadas, resolução ${this._resolution}, conexões ${this._connections} `);
  }

  /*
    O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
    Em caso positivo, definir este valor para o atributo _connectedTo;
    Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
  */
  // getter: ACESSA OS ATRIBUTOS DA CLASSE
  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  // setter: MODIFICA OS ATRIBUTOS DA CLASSE
  set connectedTo(newConnection: string | undefined) {
    // O condicional permite setar undefined ou uma conexão que esteja no `connections`
    if (!newConnection || this._connections.includes(newConnection)) {
      this._connectedTo = newConnection
      console.log(this._connectedTo);
    } else {
      console.log("Sorry, connection unavailable!");
    }
  }
}

// cria um objeto com a palavra reservada "new"
const television = new Tv('Samsung', 50, '4k', ['wifi', 'bluetooth']);

// chama o método "turnOn" da classe Tv
television.turnOn();

// define valor para o atributo _connectedTo por meio do método setter
television.connectedTo = 'wifi';

// imprime valor declarado na linha 47 pelo método getter
console.log('Connected to', television.connectedTo);


// executar com "npm start"
