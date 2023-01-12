let maior = document.querySelector(".maior")
let menor = document.querySelector(".menor")
//let mostraNaTela = document.querySelector(".mostraNaTela")
let resultado = document.querySelector("#resuldado")
 

numero = 0

function aumenta(){
    numero++
    mostraNaTela()

}

maior.addEventListener("click", ()=>{
    aumenta()
})

function diminuir(){
    numero--
    mostraNaTela()
}

menor.addEventListener("click", ()=>{
    diminuir()
    
})

function mostraNaTela(){
    const p = document.querySelector("#resuldado")
    p.innerHTML = numero
}

mostraNaTela()