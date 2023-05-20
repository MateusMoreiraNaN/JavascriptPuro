const elos = [
    7,
    5,
    2,
    10,
    8,
    3,
    4,
    10,
    6,
    8,
    9,
    5,
    7,
    2,
    9,
    7,
    2,
    1,
    6,
    5,
    9,
    10,
    8,
    9,
    8,
    10,
    10,
    9,
    -45,
    5,
    6,
    5,
    7,
    8,
    9,
    10,
    7,
    2,
    2,
    1,4,
    5,
    5,
    6,
    8,
]

const lobbyPredador = elos.filter((elo)=>{
    return elo > 8 && elo <= 10
    
})

console.log('Predadores:');
console.log(lobbyPredador);

const lobbyDima = elos.filter((elo)=>{
    return elo > 4 && elo <= 7
})

console.log(' ');

console.log('Diamante');
console.log(lobbyDima);

const lobbyBronze = elos.filter((elo)=>{
    return elo > 0 && elo <= 3
})

console.log('Bronze');
console.log(lobbyBronze);

const semElo = elos.filter((elo)=>{
    return elo < 0
})

console.log('Sem elo');
console.log(semElo);
