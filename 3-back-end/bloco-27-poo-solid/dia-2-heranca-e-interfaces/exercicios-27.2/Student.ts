// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _name: string;
  private _enrollment: string;
  private _testGrades: number[];
  private _workGrades: number [];

  constructor(n: string, e: string) {
    this._name = n;
    this._enrollment = e;
    this._testGrades = [];
    this._workGrades = [];
  }

  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('The name must have 3 characters at least');
    }
    this._name = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get testGrades(): number[] {
    return this._testGrades;
  }

  set testGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('The student must have 4 test grades only');
    }
    this._testGrades = value;
  }

  get workGrades(): number [] {
    return this._workGrades;
  }

  set workGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('The student must have 2 work grades only');
    }
    this._workGrades = value;
  }

  sumGrades(): number {
    const sum = [...this._testGrades, ...this._workGrades];
    return sum.reduce((previousNote, note) => previousNote + note)
  }

  averageGrades(): number {
    const numberOfGrades = this._testGrades.length + this._workGrades.length;
    const average = this.sumGrades() / numberOfGrades;
    return parseFloat(average.toFixed(2));
    // return Math.round(average);
  }
}

const student1 = new Student('Tiemi', 'TypeScript');
console.log('Sem notas', student1);

student1.testGrades = [4, 5, 7, 9];
console.log('Com 4 notas de provas', student1);

// Lança erro 'The student must have 4 test grades only'
// student1.testGrades = [4, 5, 7, 10, 9]
// console.log('Com 5 notas de provas', student1);

student1.workGrades = [10, 8];
console.log('Com 2 notas de trabalhos', student1);

// Para instanciar uma classe, a validação não é lida (do nome ter pelo menos 3 caracteres)
const studentTwo = new Student('Tr', 'Back-end');
console.log('Sem notas', studentTwo);

// Ao utilizar o setter a validação é lida e lança o erro 'The name must have 3 characters at least'
// studentTwo.name = 'Tr'

console.log('Soma de todas as notas', student1.sumGrades());
console.log('Média de todas as notas', student1.averageGrades());