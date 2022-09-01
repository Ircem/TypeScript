import { HolaMUNDO, Soma, criaDubla } from "./função";
import { Pesso, Anulo, Generica } from "./Pessoa";
HolaMUNDO();

console.log(criaDubla<string, number>("marcos", 49));
console.log(criaDubla<boolean, string>(false, "marcos"));

var vGenerica: Generica<string> = {
  atributo: "bolas"
};
console.log(vGenerica);
var numero: number = 15874;
console.log(numero.toString().length);
