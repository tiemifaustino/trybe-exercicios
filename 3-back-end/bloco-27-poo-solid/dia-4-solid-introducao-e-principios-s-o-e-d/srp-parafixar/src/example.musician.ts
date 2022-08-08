/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line max-classes-per-file
interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta'),
  // eslint-disable-next-line no-empty-function
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`,
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
// Minha flauta está emitindo melodias
// "Márcia" é quem está comandando a emissão dos sons
musician2.play();
// Minha bateria está fazendo o ar vibrar bem forte
// "Vicente" é quem está comandando a emissão dos sons
musician3.play();
// Meu violão está vibrando suas cordas
// "Natan" é quem está comandando a emissão dos sons
