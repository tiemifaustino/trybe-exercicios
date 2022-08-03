// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class School {
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
}