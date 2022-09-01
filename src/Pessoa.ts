interface Pesso {
  nome: string;
  idade: number;
}

interface Anulo extends Pesso {
  curso: string;
}

interface Generica<tipo> {
  atributo: tipo;
}

export { Pesso, Anulo, Generica };
