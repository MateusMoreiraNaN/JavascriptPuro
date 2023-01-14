
function atirando(e){
    if(e.key === 'q'){
        console.log('atirando');
    }
}

function abaixar(e){
    if(e.key === 'Control'){
        console.log('abaixado');
    }
} 

function correndo(e){
    if(e.key === 'Shift'){
        console.log('Correndo');
    }
}

function frente(e){
    if(e.key === 'w'){
        console.log('andando para frente');
    }
}

function esquerda(e){
    if(e.key === 'd'){
        console.log('Esquerda');
    }
}

function direita(e) {
    if(e.key === 'a'){
        console.log('Direita');
    }
}

function voltar(e){
    if(e.key === 's'){
        console.log('Voltando');
    }
}

function menu(e){
    if(e.key === 'Tab'){
        console.log('Abrindo o menu');
    }
}


function recuperarvida(e){
    if(e.key === 'f'){
        console.log('Recuperando vida...');
    }
}

function pular(e){
    if(e.key === 'Space'){
        console.log('Pulando');
    }
}


/*
function teste(e){
    if(e){
        console.log(e.code);
    }
}
*/




/*
document.addEventListener('keyup', ()=>{
    
    atirar(),
    abaixar(),
    correr(),
    frente(),
    menu(),
    recuperarvida(),
    
    teste

})
*/

//document.addEventListener('keydown', teste)
document.addEventListener('keydown', atirando)
document.addEventListener('keydown', correndo)
document.addEventListener('keydown', abaixar)
document.addEventListener('keydown', frente)
document.addEventListener('keydown', esquerda)
document.addEventListener('keydown', direita)
document.addEventListener('keydown', voltar)
document.addEventListener('keydown', menu)
document.addEventListener('keyup', recuperarvida)
document.addEventListener('keydown', pular)
