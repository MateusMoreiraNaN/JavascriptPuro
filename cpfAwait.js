const cpf =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let cpf = '147.547.654-7'
            let corret = '147.547.654-7' 
            
            if(cpf === corret){
                console.log('CPF VAlIDO');
            }
        },2000)
    })
}

const validador = async ()=>{
    try{
        await cpf()
    }catch(erro){
        console.log('CPF INVALIDO')
    }
}

validador()