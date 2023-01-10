let numeros = [
    {id: 45},
    {id: 11},
    {id: 8},
    {id: 5},
    {id: 67},
    {id: 87},
    {id: 90},
    {id: 1},
    {id: 4},
    {id: 54},
    {id: 61},
    {id: 30},
    {id: 22},
    {id: 0},


]

numeros.sort((a, b)=>{
    if(a.id > b.id){
        return 1
    }else if(a.id < b.id){
        return -1
    }else{
        return 0
    }
})

//numeros.reverse()

for(let n of numeros){
    console.log(n);
}