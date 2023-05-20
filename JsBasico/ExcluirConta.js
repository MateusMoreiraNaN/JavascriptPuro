function excluir(email){
    const DBemail = 'mateusgodoi007@gmail.com'

    if(email === DBemail){
        console.log('Conta excluida com sucesso');
    }else if(email != DBemail){
        console.log('Não encontramos esse email no nosso banco de dados');
    }

    return email
}

let email = 'mateusgodoi007@gmail.com'

console.log('------------------------');

console.log('Excluir conta atual');

let apiExcluir = excluir(email)

//console.log(apiExcluir);
console.log('------------------------');


