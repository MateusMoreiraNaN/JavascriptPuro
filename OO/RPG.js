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