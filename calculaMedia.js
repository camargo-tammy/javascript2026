let nota1 = 6;
let nota2 = 9;
let nota3 = 7;
let nota4 = 10;
const nomeAluno = "alice";

let media = (nota1 + nota2 + nota3 + nota4) /4

if (media >= 7){
    console.log("A aluna " + nomeAluno + " está aprovada")
} if (media >= 5 && media < 7 ){
    console.log("A aluna " + nomeAluno + " está de se liga")
}
if (media < 5) {
    console.log("A aluna " + nomeAluno + " está reprovada")
}

//console.log("A aluna: " + nomeAluno);
//console.log("Tem a média: " + media);