let Pessoas = {
    Nome: prompt("Digite seu nome:"),
    Idade: Number (prompt("Digite sua idade:"))
}

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
VerificarIdade(Pessoas.Nome, Pessoas.Idade)