function CalcImc(peso, altura){
    let imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log('Abaixo do peso');
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log('Peso normal');
    }else if(imc >= 24.9 && imc <= 29.9){
        console.log('Sobrepeso');
    }else if(imc >= 30 && imc <= 34.9){
        console.log('Obesidade grau I');
    }else if(imc >= 35 && imc <= 39.9){
        console.log('Obesidade grau II');
    }else{
        console.log('Obesidade grau III ou mórbida');
    }

    return imc
}

let peso = 54.12
let altura = 1.76

let imcFinal = CalcImc(peso, altura).toFixed(1)

console.log(`Seu IMC é: ${imcFinal}`);

