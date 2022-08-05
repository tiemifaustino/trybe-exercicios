// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _name: string = ''; // atribui um valor inicial
  private _enrollment: string;
  private _testGrades: number [] = Array();
  private _workGrades: number [] = Array();

  constructor(n: string, e: string, t: number[], w: number[]) { 
    this.name = n; // retira o underscore para poder acessar o setter // Ao utilizar o setter a validação é lida 
    this._enrollment = e;
    this.testGrades = t;
    this.workGrades = w;
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
    return this._enrollment as string;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get testGrades(): number[] {
    return this._testGrades;
  }

  set testGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('The student must have 4 test grades');
    }
    this._testGrades = value;
  }

  get workGrades(): number [] {
    return this._workGrades;
  }

  set workGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error('The student must have 2 work grades');
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

// throw new Error('The name must have 3 characters at least'):
// const studentTest = new Student('La', 'JS', [1,2,3,4], [10,10])

const student1 = new Student('Tiemi', 'TypeScript', [4, 5, 7, 9], [10, 8]);
console.log(student1);

// Error: The student must have 4 test grades
// student1.testGrades = [4, 5, 7, 10, 9]
// console.log('Com 5 notas de provas', student1);

// Error: The student must have 4 test grades
// const studentTwo = new Student('Tryber', 'Back-end', [4, 5, 7, 9, 10], [10, 8] );
// console.log(studentTwo);

// Error: The student must have 2 work grades
// const studentThree = new Student('Tryber', 'Back-end', [4, 5, 7, 9], [8] );


console.log('Soma de todas as notas', student1.sumGrades());
console.log('Média de todas as notas', student1.averageGrades());