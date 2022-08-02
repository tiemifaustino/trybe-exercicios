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
}

// cria um objeto com a palavra reservada "new"
const television = new Tv('Samsung', 50, '4k', ['wifi', 'bluetooth']);

// chama o método "turnOn" da classe Tv
television.turnOn();

// executar com "npm start"
