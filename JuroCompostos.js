function calculaJurosCompostos(capital, taxa, tempo) {
    let i = taxa / 100;
  
    let montante = capital * (1 + taxa/100) ** tempo;
    
    return montante;
}

let conta1 = calculaJurosCompostos(3000, 5, 8);

console.log("O montante é R$" + conta1);
