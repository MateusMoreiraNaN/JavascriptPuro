let personagem1 = {
    nome: 'Mateus',
    vida: 80,
    stamina: 30,
    class: 'mago'
}

let personagem2 = {
    nome: 'New',
    vida: 80,
    stamina: 30,
    class: 'bruxo'
}

let personagem3 = {
    nome: 'Teste',
    vida: 80,
    stamina: 30,
    class: 'ladino'
}

if(personagem1.class === personagem2.class || personagem1.class === personagem3.class || personagem2.class === personagem3.class){
    console.log('Classes iguais');
}else if(personagem1.class != personagem2.class || personagem1.class != personagem3.class != personagem2.class === personagem3.class){
    console.log('Carregando combate....')

}

personagem1.vida -= 64
personagem3.vida -= 50
personagem1.vida -= 12
personagem2.vida -= 44
personagem3.vida -= 12
personagem2.vida -= 10

function build(personagem1, personagem2, personagem3){
    if(personagem1.vida >= personagem2.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem1.nome} está ganhando`);
    }else if(personagem2.vida >= personagem1.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem2.nome} está ganhando`);
    }else if(personagem3.vida >= personagem1.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem3.nome} está ganhando`);
    }else if(personagem2.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem2.nome} está ganhando`);
    }else if(personagem3.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem3.nome} está ganhando`);
    }else if(personagem1.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem1.nome} está ganhando`);
    }
}

let combate = build(personagem1, personagem2, personagem3);

console.log(' ');

personagem1.vida -= 4
personagem3.vida -= 18
personagem2.vida -= 10

function build2(personagem1, personagem2, personagem3){
    if(personagem1.vida >= personagem2.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem1.nome} está ganhando`);
    }else if(personagem2.vida >= personagem1.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem2.nome} está ganhando`);
    }else if(personagem3.vida >= personagem1.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem3.nome} está ganhando`);
    }else if(personagem2.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem2.nome} está ganhando`);
    }else if(personagem3.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem3.nome} está ganhando`);
    }else if(personagem1.vida >= personagem3.vida){
        console.log(`Personagem 1: ${personagem1.vida}`);
        console.log(`Personagem 2: ${personagem2.vida}`);
        console.log(`Personagem 3: ${personagem3.vida}`);
        console.log(`${personagem1.nome} está ganhando`);
    }
}

let combate2 = build(personagem1, personagem2, personagem3);

if(personagem1.vida <= 0){
    console.log('Personagem1 morreu');
}else if(personagem2.vida <= 0){
    console.log('Personagem2 morreu');
}else if(personagem3.vida <= 0){
    console.log('Personagem3 morreu');
}

if(personagem1.vida > 0 && personagem2.vida == 0 && personagem3.vida == 0){
    console.log('Personagem1 ganhou');
    console.log('Fim');
}else if(personagem2.vida > 0 && personagem1.vida == 0 && personagem3.vida == 0){
    console.log('Personagem2 ganhou');
    console.log('Fim');
}else if(personagem3.vida > 0 && personagem1.vida == 0 && personagem2.vida == 0){
    console.log('Personagem3 ganhou');
    console.log('Fim');
}