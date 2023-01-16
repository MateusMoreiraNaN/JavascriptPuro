const body = document.querySelector('body')

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

document.addEventListener('keydown', laranja)
document.addEventListener('keydown', azul)




