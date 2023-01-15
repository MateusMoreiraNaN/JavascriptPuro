const tela = document.querySelector("ul")

function atirando(e){
    if(e.key === 'q'){
        let comando = 'Atirando'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function abaixar(e){
    if(e.key === 'Control'){
        let comando = 'Abaixando'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
} 

function correndo(e){
    if(e.key === 'Shift'){
        let comando = 'Correndo'
        let teste = 'teste'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function frente(e){
    if(e.key === 'w'){
        let comando = 'Andando para frente'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function esquerda(e){
    if(e.key === 'd'){
        let comando = 'Esquerda'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function direita(e) {
    if(e.key === 'a'){
        let comando = 'Direita'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function voltar(e){
    if(e.key === 's'){
        let comando = 'Voltando'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function menu(e){
    if(e.key === 'Tab'){
        let comando = 'Abrindo o menu'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}


function recuperarvida(e){
    if(e.key === 'f'){
        let comando = 'Recuperando vida'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
    }
}

function pular(e){
    if(e.key === 'Space'){
        let comando = 'Pulando'

        let newLi = document.createElement('li')

        newLi.innerText = comando
        
        tela.appendChild(newLi)
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
