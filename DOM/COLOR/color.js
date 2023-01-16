const body = document.querySelector('body')
const oi = document.createElement('p')

function laranja(e){
    if(e.code === 'Numpad1'){
        body.style.backgroundColor = '#ff6600'
    }

}

function azul(e){
    if(e.code === 'Numpad4'){
        body.style.backgroundColor = '#1a8cff'
    }
}

function text(e){
    if(e.code === 'Numpad2'){
        let texto = document.createTextNode('Breaking Bad')
        
        oi.appendChild(texto)

        body.appendChild(oi)

        oi.style.color = '#000'
        oi.style.fontSize = '35px'
    }
}

document.addEventListener('keydown', laranja)
document.addEventListener('keydown', azul)
document.addEventListener('keyup', text)




