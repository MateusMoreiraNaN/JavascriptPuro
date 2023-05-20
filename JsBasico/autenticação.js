const DBemail = "mateusgodoi007@gmail.com"
const DBsenha = 20232022

let email = "mateusgodoi007@gmail.com"
let senha = 20232022

let estaDB = DBemail === email && DBsenha === senha

console.log('status do usuario: ' + estaDB);

let naoEstaDB = DBemail !=  email && DBemail != senha

console.log('status do usuario: ' + naoEstaDB);



console.log('----------------------------------');

if(DBemail === email && DBsenha === senha){
    console.log('Acesso liberado');
    console.log('--------------------------');
    console.log('HTML');
    console.log('CSS');
    console.log('JS');
    console.log('NODE');
    console.log('--------------------------');
}else if(DBemail != email && DBsenha != senha){
    console.log('Acesso negado');
    console.log('Não encontramos seus dados no nosso banco de dados');
}else if(DBemail != email && DBsenha === senha){
    console.log('Acesso negado');
    console.log('Email não encontrado');
}else if(DBemail === email && DBsenha != senha){
    console.log('Acesso negado');
    console.log('Senha não encontrada');
}
