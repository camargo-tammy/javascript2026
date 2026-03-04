const readline = require('readline-sync');

console.log("Sistema de acesso ao Pub do John");


const nome = readline.question("Qual seu nome? ");
const idade = readline.questionInt("Qual sua idade? ");

if (idade >= 18) {
    console.log(`Olá ${nome}, sua entrada foi autorizada.`);
    const jovem = readline.keyInYN("Deseja refri? ");
    if (jovem) {
        console.log("Temos pepsi e coca! ");
    } else {
        console.log("Temos sucos e água com gás também!");

    }
} else if (idade >= 16) {
    console.log(`Olá ${nome}, você precisa estar acompanhado de um adulto.`);

} else {
    console.log(`Sinto muito ${nome}, apenas maiores que 16....`);
}

