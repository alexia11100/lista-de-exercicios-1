// 4. Crie um menu interativo no console que oferece ao usuário a 
// escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção 
// selecionada.

const prompt = require('prompt-sync')();

console.log("MENU")
console.log("1. Arroz, 2.Carne e 3.Feijão")
let opcaoUsuario = prompt("Opção: ")

switch(opcaoUsuario){
    case "1":
        console.log("Vc escolheu: Arroz");
        break;
    case "2":
        console.log("Vc escolheu: Carne");
        break;
    case "3":
        console.log("Vc escolheu: Feijão")
        break;
    default:
        console.log("Opção inválida")

}