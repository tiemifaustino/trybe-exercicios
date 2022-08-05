class Person {
  constructor(private _name: string, private _birthDate: Date) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('The name must have 3 characters at least');
    }
    this._name = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }
}