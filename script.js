function faixaEtaria(nome, idade) {
  if (idade <= 2) {
    return `${nome} é bebê`;
  } else {
    if (idade <= 12) {
      return `${nome} é criança`;
    } else {
      if (idade <= 17) {
        return `${nome} é adolescente`;
      } else {
        if (idade <= 29) {
          return `${nome} é jovem adulto`;
        } else {
          if (idade <= 59) {
            return `${nome} é adulto`;
          } else {
            return `${nome} é idoso`;
          }
        }
      }
    }
  }
}
console.log(faixaEtaria("Ana", 1));   
console.log(faixaEtaria("Bruno", 14)); 
console.log(faixaEtaria("Clara", 45)); 
console.log(faixaEtaria("David", 70)); 

