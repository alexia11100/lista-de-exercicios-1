// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else 

const prompt = require('prompt-sync')();

let nota = Number(prompt("Diga sua nota: "))

if(nota === 0){
     console.log("Reprovado")
}else if(nota >0 && nota < 5 ){
    console.log("Recuperação")
}else if(nota >=5 && nota <= 10){
    console.log("Aprovado")
}else{
    console.log("Nota inválida")
}