export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
<<<<<<< HEAD
    this.name = _name; // this.name sem underscore para acessar o setter
    this.birthDate = _birthDate; // o setter terá o valor do atributo _birthDate e o de cima atributo _name
=======
    this._name = _name;
    this._birthDate = _birthDate;
>>>>>>> c0e17246b8217fdc9c1943ec78a6ff050383497c
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

  // MÉTODO ESTÁTICO - é relacionado com a classe como um todo
  static getAge(value: Date) {
    const diffTimeMs = Math.abs(Date.now() - new Date(value).getTime());
    const oneYearInMs = 31536000000;
    return Math.floor(diffTimeMs / oneYearInMs);
  }

  // VALIDATIONS 
  // - O nome deve ter no mínimo três caracteres
  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('name must have 3 characters at least');
    }
  }

  // - A data de nascimento não pode ser uma data no futuro
  //  - A pessoa não pode possuir mais de 120 anos
  private validateBirhDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('birthDate must not be a date in the future');
    if (Person.getAge(value) > 120) throw new Error('Person must be until 120 years')
  }
}

/* const person1 = new Person('Tiemi', new Date(1990, 3, 26));
console.log(person1);
console.log(person1.birthDate); // getter */
// new Date() -> retorna data atual (hoje)
// getTime() -> retorna Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual
// Date.now() -> retorna o número de milissegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.

// 2022 - 1970 = 52 anos
// console.log(new Date().getTime()); // 1659705623904 milissegundos

// data em milissegundos - data de nascimento convertida em milissegundos = diferença em milissegundos (decorridos da data de 01/01/1970)
// console.log(Math.abs(Date.now() - new Date(1990, 3, 26).getTime()));

<<<<<<< HEAD
const person2 = new Person('Da', new Date('2023/04/10'));
console.log(person2);
=======
/* const person2 = new Person('Da', new Date('2023/04/10'));
console.log(person2); */
>>>>>>> c0e17246b8217fdc9c1943ec78a6ff050383497c

// erro 'birthDate must not be a date in the future'
// console.log(person2.birthDate = new Date('2023/04/10')); // setter

// erro 'name must have 3 characters at least'
// console.log(person2.name = 'Da');




