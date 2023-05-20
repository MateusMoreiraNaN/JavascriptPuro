const rpg = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let arya = 74
            let ana = 4

            if(arya >= ana){
                console.log("Arya venceu")
            }else if(ana >= arya){
                console.log("Ana venceu")
            }else if(ana === arya){
                console.log("Empate")
            }
        }, 1000)
    })
}

const resultado = async ()=>{
    await rpg()
    

    
}

resultado()