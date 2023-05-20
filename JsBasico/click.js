function click(cli){
    if(cli == true){
        console.log('Entrou na proxima página');
    }else if(cli == false){
        console.log('Nada mudou');
    }

    //let cli = click(false)

    return cli
}

let cli = click(false)

console.log(cli);

