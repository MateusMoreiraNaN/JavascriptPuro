let nota1 = 9.8
let nota2 = 10.0
let nota3 = 8.7
let nota4 = 9.7

let media = ((nota1+nota2+nota3+nota4)/5).toFixed(1)

console.log('sua média: ' + media);

if(media >= 0 && media <= 3.5){
    console.log('Reprovado');
}else if(media >= 3.6 && media <= 4.9){
    console.log('Você está de recuperação');
}else if(media >= 5.0 && media <= 10.0){
    console.log('Aprovado');
}