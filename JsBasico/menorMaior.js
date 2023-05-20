const idades = [17, 15, 21, 54, 64, 7, 20, 35, 37, 25, 45, 4, 23, -4, -45 -1, 4, 87, 95, 44, 21]

const maiorDeIdade = idades.filter((idade)=>{
    return idade >= 18
})

console.log('Maior de idade');
console.log(maiorDeIdade);

const menorDeIdade = idades.filter((idade)=>{
    return idade > 0 && idade < 18
})

console.log('Menor de idade');
console.log(menorDeIdade);