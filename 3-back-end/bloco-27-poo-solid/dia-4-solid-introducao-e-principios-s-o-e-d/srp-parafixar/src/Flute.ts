// Flute.ts
export default class Flute {
  /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
  constructor(public name: string) { }
  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}