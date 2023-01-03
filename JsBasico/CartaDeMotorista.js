let age = 20

if(age >= 18){
    console.log("Aprovado para fazer a prova");
    let provaNota = 8.5
    if(provaNota > 6.5){
        console.log('Aprovado');
        console.log('retirá sua carteira no dia 23/01/23');
    }else if(provaNota < 6.4){
        console.log('Reprovado');
    }
}else if(age < 18 || age > 67){
    console.log('Você não tem idade para tirar a carteira de motorista');
}