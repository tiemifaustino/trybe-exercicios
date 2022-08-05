class Person {
  constructor(public _name: string, private _birthDate: Date) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  private validateName(value: string) {
    if (value.length < 3) {
      throw new Error('The name must have 3 characters at least');
    }
  }
}

const person1 = new Person('Tiemi', new Date(1990, 3, 26));
console.log(person1);
console.log(person1.birthDate);
// new Date() -> retorna data atual (hoje)
// getTime() -> retorna Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual
// console.log(new Date().getTime());
console.log(Math.abs(Date.now() - new Date(1990, 3, 26).getTime()));

