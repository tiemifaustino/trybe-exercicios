// Musician.ts
import Flute from './Flute';

export default class Musician {
  //  O problema desta abordagem é que fixamos um determinado objeto como dependência. Isso cria um alto acoplamento e faz com que o código fique difícil de ser testado e utilizado em outros lugares e contextos. Se você fizer um teste de Musician.play() este teste vai ser, obrigatoriamente, um teste de integração, pois o método Flute.play() também será executado.

  // public flute: Flute; 

  // constructor(public name: string) {
  //   this.flute = new Flute('minha flauta');
  // }

  /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
  // Agora a flauta é recebida como parâmetro
  constructor(
    public name: string,
    public flute: Flute,
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const flute = new Flute('Minha flauta');
const musician = new Musician('Márcia', flute);
musician.play();