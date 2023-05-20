function Coop(time1, time2, time3, time4){
    const meta = 50

    if(time1 >= meta){
        console.log('time 1 foi campeão');
    }else if(time2 >= meta){
        console.log('time 2 foi campeão');
    }else if(time3 >= meta){
        console.log('time 3 foi campeão');
    }else if(time4 >= meta){
        console.log('time 4 foi campeão');
    }

    
}

let time1 = 31
let time2 = 45
let time3 = 53
let time4 = 41

let campeao = Coop(time1, time2, time3, time4)

//console.log(campeao);