function calculaJuroSimples(capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    let montante = capital + juros;

    return montante;
}

let conta = calculaJuroSimples(5000, 4, 6);
console.log("O montante R$" + conta1);