// 10. Escreva um algoritmo para ler um número inteiro e 
// escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let num = prompt("Diga um numero: ")
let contador = 0;
for(contador; contador < 10; contador++){
    
    console.log("Numero: ",num,", Contador: ", contador + 1 )
}

console.log(contador)
