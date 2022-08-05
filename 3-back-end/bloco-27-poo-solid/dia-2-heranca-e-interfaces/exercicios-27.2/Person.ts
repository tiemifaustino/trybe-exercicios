class Person {
  constructor(public _name: string, private _birthDate: Date) {
    this._name = _name;
    this._birthDate = _birthDate;
  }

  // GETTERS | SETTERS
  get name(): string {
    return this._name;
  }

  set name(value: string) { // um setter não pode ter uma anotação de tipo de retorno (ele não retorna, só modifica o atributo)
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirhDate(value);
    this._birthDate = value;
  }

  // VALIDATIONS 
  // - O nome deve ter no mínimo três caracteres
  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('The name must have 3 characters at least');
    }
  }

  // - A data de nascimento não pode ser uma data no futuro
  //  - A pessoa não pode possuir mais de 120 anos
  private validateBirhDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('The birthDate must not be a date in the future');
  }
}

const person1 = new Person('Tiemi', new Date(1990, 3, 26));
console.log(person1);
console.log(person1.birthDate); // getter
// new Date() -> retorna data atual (hoje)
// getTime() -> retorna Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual
// Date.now() -> retorna o número de milissegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.

// 2022 - 1970 = 52 anos
// console.log(new Date().getTime()); // 1659705623904 milissegundos

// data em milissegundos - data de nascimento convertida em milissegundos = diferença em milissegundos (decorridos da data de 01/01/1970)
// console.log(Math.abs(Date.now() - new Date(1990, 3, 26).getTime()));

const person2 = new Person('Danilo', new Date('2023/04/10'))
// erro 'The birthDate must not be a date in the future'
// console.log(person2.birthDate = new Date('2023/04/10')); // setter




