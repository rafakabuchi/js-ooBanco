import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("rafaela", 12121212);
 cliente1.rg = 12121212;

 const cliente2 = new Cliente("alice", 33333333);

 const contaCorrenteRicardo = new ContaCorrente (1001, cliente1);

 contaCorrenteRicardo.depositar(500);
 const conta2 = new ContaCorrente(1002, cliente2);

 let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);