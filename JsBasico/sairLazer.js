let diaDaSemana = "sexta"
let temDinheiro = true

if(diaDaSemana === "domingo" && temDinheiro === true){
    console.log('ir no parque e ir no cinema');
}else if(diaDaSemana == "domingo" || temDinheiro == true){
    console.log('ir no parque');
}else if(diaDaSemana != "domingo" && temDinheiro != true){
    console.log('ficar em casa');
}