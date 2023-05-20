const email = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let emailF = "mateusgodoi07@gmail.com"
            let emailtrue = "mateusgodoi007@gmail.com"
            if(emailF === emailtrue){
                resolve("Bem vindo!!")
            }else{
                reject("Não autorizado")
            }
        }, 2000)
    })
}

const autenticação = async ()=>{
    try{
        await email("Olá como vai")
        console.log("Bem vindo");
    }catch(erro){
        console.log("Não autorizado");
    }

}

autenticação()