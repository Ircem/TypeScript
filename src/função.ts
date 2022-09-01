function HolaMUNDO(): void {
  console.log("Morra Humanos Nojentos ");
}

function Soma(pNumeo1: number, pNumero2: number): number {
  return pNumeo1 + pNumero2;
}
function criaDubla<tipo1, tipo2>(v1: tipo1, V2: tipo2): { tipo1; tipo2 } {
  return { v1, V2 };
}
export { HolaMUNDO, Soma, criaDubla };
