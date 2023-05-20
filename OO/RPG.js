class build{
    
    constructor(life, name){
        if(typeof life == 'number'){
            this.life = life
        }else{
            console.log('error');
        }

        this.name = name
    }
}

class mago extends build{
    QI = 90
    agilidade = 80
    magia = 100
    forca = 48

}

class guerreiro extends build{
    forca = 100
    agilidade = 80
    resistencia = 78
}

class ladino extends build{
    furtividade = 100
    QI = 95
    resiliencia = 90
    forca = 61
}

class ninja extends ladino{
    agilidade = 94
}

let classe1 = new mago(100, 'Java')

console.log(`nick:${classe1.name}\nvida: ${classe1.life} \nQI:${classe1.QI}\nagilidade:${classe1.agilidade}\nMagia:${classe1.magia}\nforça:${classe1.forca}`);