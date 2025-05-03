// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e 
// fazera média aritmética desses números.

const prompt = require('prompt-sync')();

const listaNumeros = []

// Loop para adicinar numeros na lista de numeros
while(true){
    numero = Number(prompt("Diga um numero: "))
    if(numero === 0){
        break
    }
    listaNumeros.push(numero)
}

let soma = 0
for(numero of listaNumeros){
    soma += numero
}
const media = soma / listaNumeros.length

console.log(listaNumeros)
console.log(media)