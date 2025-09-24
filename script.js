// let Pessoas = {
//     Nome: prompt("Digite seu nome:"),
//     Idade: Number (prompt("Digite sua idade:"))
// }

const VerificarIdade = (Nome,Idade) => {
    if(Idade >= 0 && Idade <= 2){
        alert('Olá ${Nome},Você é um bebê')
    }
    else if(Idade >= 3 && Idade <= 12){
        alert('Olá ${Nome},Você é uma criança')
    }

    else if(Idade >= 13 && Idade <= 17){
        alert('Olá ${Nome},Você é um adolescente')
    }
    else if(Idade >= 30 && Idade <= 29){
        alert('Olá${Nome},Você é um jovem adulto ')
    }
    else if(Idade >= 30 && Idade <= 59){
        alert('Olá ${Nome},Você é um adulto')
    }
    else if (Idade >= 60){
        alert('Olá ${Nome},Você é um idoso')
    }
}
// VerificarIdade(Pessoas.Nome, Pessoas.Idade)


// par ou ímpar
function ParOuimpar(numero){
    if(numero % 2 == 0){
        return 'par'
    }
    else{
        return 'ímpar'
    }
}
alert(ParOuimpar(2))


// Faça um contador que aumenta de 0 a 10 usando for
for(let I = 0; I <= 10; I++){
    console.log(I)
}