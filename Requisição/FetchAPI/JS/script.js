function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((data) => {
        
    })
}

document.querySelector('#botao').addEventListener('click', ()=>{
    fetchApiData()
})