var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        // GETTERS | SETTERS
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirhDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    // VALIDATIONS 
    // - O nome deve ter no mínimo três caracteres
    Person.prototype.validateName = function (value) {
        if (value.length < 3) {
            throw new Error('The name must have 3 characters at least');
        }
    };
    // - A data de nascimento não pode ser uma data no futuro
    //  - A pessoa não pode possuir mais de 120 anos
    Person.prototype.validateBirhDate = function (value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('The birthDate must not be a date in the future');
    };
    return Person;
}());
var person1 = new Person('Tiemi', new Date(1990, 3, 26));
console.log(person1);
console.log(person1.birthDate);
// new Date() -> retorna data atual (hoje)
// getTime() -> retorna Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual
// Date.now() -> retorna o número de milissegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.
// 2022 - 1970 = 52 anos
// console.log(new Date().getTime()); // 1659705623904 milissegundos
// data em milissegundos - data de nascimento convertida em milissegundos = diferença em milissegundos (decorridos da data de 01/01/1970)
// console.log(Math.abs(Date.now() - new Date(1990, 3, 26).getTime()));
var person2 = new Person('Danilo', new Date(2023 / 04 / 10));
console.log(person2);
