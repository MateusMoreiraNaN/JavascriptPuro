function experi(minhaExperi){
    //let junior = 2
    //let pleno = 4
    //let senior = 7

    if(minhaExperi > 0 && minhaExperi <= 1){
        console.log('Programador: Estagiário');
    }else if(minhaExperi > 1 && minhaExperi <= 2){
        console.log('Programador: Junior');
    }else if(minhaExperi > 3 && minhaExperi <= 6){
        console.log('Programador: Pleno');
    }else if(minhaExperi > 7 && minhaExperi <= 10){
        console.log('Programador: Senior');
    }


}

let minhaExperi = 8

let euProgramador = experi(minhaExperi)
