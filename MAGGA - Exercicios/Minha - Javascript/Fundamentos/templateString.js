const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
const down = texto => texto.toLowerCase()
console.log(`Ei... ${up('cuidado')}!`)
console.log(`Ei... ${down('TESTE')}!`)