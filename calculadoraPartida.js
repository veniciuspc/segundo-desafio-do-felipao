const prompt = require('prompt-sync')();

rank();

function rank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
        return saldoVitorias;
} 

for (let i = 0; i < 2; i++) {        
    let vitorias = prompt("Digite o numero de vitorias: ");    
    let derrotas = prompt("Digiti o numero de derrotas: ");
    
    let saldoVitorias = rank(vitorias, derrotas);
    let nivel = nivelHeroi(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}` );
           
}

nivelHeroi();

function nivelHeroi(saldoVitorias) {
    if( saldoVitorias < 10){
        return "Ferro";
    }                   
    if ( saldoVitorias > 11 && saldoVitorias < 20){
        return "Broze";
    }
    if ( saldoVitorias > 21 && saldoVitorias < 50){
        return "Prata";
    }
    if ( saldoVitorias > 51 && saldoVitorias < 80){
        return "Ouro";
    }
    if ( saldoVitorias >81 && saldoVitorias < 90){
        return "Diamante";
    }
    if ( saldoVitorias > 91 && saldoVitorias < 100){
        return "Lendario";
    }
    if ( saldoVitorias >= 101){
        return "Imortal";
    } 
  
}
