import { Pesso, Anulo } from "./Pessoa";

var vPessoa: Pesso = {
  nome: "Marcolinha",
  idade: 49
};

var vAluno: Anulo = { ...vPessoa, curso: "Sair21" };

console.log(vPessoa);
console.log(vAluno);
console.log(vAluno);
