// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let idade = prompt("Diga sua idade: ")
if(isNaN(idade)){
    console.log(`"${idade}" não é um numero`)
    process.exit()
}
idade = Number(idade)

if(idade > 0 && idade < 14){
    console.log(`Sua idade é ${idade} anos, você é criança`)
}else if(idade >=14 && idade <18){
    console.log(`Sua idade é ${idade} anos, você é adolecente`)
}else if(idade >=18 && idade <50){
    console.log(`Sua idade é ${idade} anos, você é Adulto`)
}else if(idade >=50 && idade <=140){
    console.log(`Sua idade é ${idade} anos, você idoso`)
}else{
    console.log("Idade inválida")
}