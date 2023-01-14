let maior = document.querySelector(".maior")
let menor = document.querySelector(".menor")
//let mostraNaTela = document.querySelector(".mostraNaTela")
const p = document.querySelector("#resuldado")
 

numero = 0

function aumenta(){
    numero++
    mostraNaTela()

}

maior.addEventListener("click", ()=>{
    aumenta()
})

function diminuir(){
    const p = document.querySelector("#resuldado")
    numero--
 
    mostraNaTela()
}

menor.addEventListener("click", ()=>{
    diminuir()
    
})

function mostraNaTela(){
    const p = document.querySelector("#resuldado")
    p.innerHTML = numero

    if(numero < 0){
        p.innerHTML = "<h3>Fim</h3>"
    }else if(numero < -3){
        p.innerHTML = "<h3>PARA</h3>"
    }
}

mostraNaTela()