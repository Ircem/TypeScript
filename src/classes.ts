class Chama {
  nome: string;
  idade: number;
  constructor(pNome: string, pIdade: number) {
    this.nome = pNome;
    this.idade = pIdade;
  }
  getNome(): string {
    return this.nome;
  }
}

export { Chama };
