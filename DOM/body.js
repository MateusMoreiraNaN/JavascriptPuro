function cor(){
    const body = document.querySelector('body')

    body.style.backgroundColor = "#ff6600"

}

let botao = document.querySelector(".botao")

botao.addEventListener("click", () => {
    cor()
})