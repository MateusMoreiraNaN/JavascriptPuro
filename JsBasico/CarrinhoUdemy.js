let cursos = [
    'Formação Node.js',
    'Next.js e React - Curso Completo - Aprenda com Projetos',
    'Curso de Python 3 do Básico Ao Avançado (com projetos reais)',
    'Java COMPLETO Programação Orientada a Objetos +Projetos',
    'O curso completo de Banco de Dados e SQL, sem mistérios!'
]

console.log('---------------------')
console.log('CARRINHO')
console.log(' ')

cursos.push('Curso Completo de PHP 7')

//cursos.shift()

cursos.pop()


cursos.shift()

cursos.pop()

cursos.push('NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger')


for(let n = 0; n < cursos.length; n++){
    console.log(cursos[n]);
}



