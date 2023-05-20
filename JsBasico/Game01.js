function jogo(perso1, perso2){
    //let perso1 = 35
    //let perso2 = 35
    
    let contra = perso1 -= perso2

    if(perso1 <= 0 || perso2 <= 0){
        console.log('A partida acabou');
    }

    return contra
}

let perso1 = 100
let perso2 = 100

let golpe = jogo(perso1, perso2) 

console.log(golpe);



