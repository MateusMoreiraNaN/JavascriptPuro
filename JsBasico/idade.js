
let pessoas = [
    {nome: 'Mateus', idade: 90},
    {nome: 'João', idade: 47},
    {nome: 'Pedro', idade: 14},
    {nome: 'Tiago', idade: 19},
    {nome: 'Helena', idade: 45},
    {nome: 'Maria', idade: 15}

]

pessoas.sort((a, b) =>{
    if(a.idade < b.idade){
        return -1
    }else{
        return true
    }
})

function maior(pessoas){
    for(let pessoa of pessoas){
        console.log(pessoa);
    }
}

if(pessoas[0].idade <= 18){
    console.log('Tem menor de idade');
}else{
    console.log('Não tem menor de idade');
}


let saida = maior(pessoas)

