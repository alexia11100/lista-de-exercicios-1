const prompt = require('prompt-sync')();

//  1. Escreva um programa que recebe um número inteiro 
// e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let numero = prompt("Diga um numero: ");

function vericaoDeImparOuPar(numero){
    if(numero %2 === 0){
        console.log(`${numero}, é par.`);
    }else{
        console.log(`${numero}, é ímpar`);
    }
}

vericaoDeImparOuPar(numero);