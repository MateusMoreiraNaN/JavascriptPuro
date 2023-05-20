function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((data) => {
        const list = document.querySelector('#fill_list')

        data.map((item)=>{
            const div = document.createElement('div')

            div.setAttribute('id', item.id)
            div.innerHTML = item.title
            list.appendChild(div)
        })
    })
}

document.querySelector('#botao').addEventListener('click', ()=>{
    fetchApiData()
})