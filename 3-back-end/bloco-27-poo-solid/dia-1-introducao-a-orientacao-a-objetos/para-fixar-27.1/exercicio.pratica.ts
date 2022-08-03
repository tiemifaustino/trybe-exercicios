// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _name: string;
  private _enrollment: string;
  private _testGrades: number[];
  private _workGrades: number [];

  constructor(n: string, e: string, t: number[], w: number[]) {
    this._name = n;
    this._enrollment = e;
    this._testGrades = t;
    this._workGrades = w;
  }

  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    if (value.length < 3) {
      console.log('The name must have 3 characters at least');
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
      console.log('The student must have 4 test grades only');
    }
    this._testGrades = value;
  }

  get workGrades(): number [] {
    return this._workGrades;
  }

  set workGrades(value: number[]) {
    if (value.length > 2) {
      console.log('The student must have 2 work grades only');
    }
    this._workGrades = value;
  }
}
