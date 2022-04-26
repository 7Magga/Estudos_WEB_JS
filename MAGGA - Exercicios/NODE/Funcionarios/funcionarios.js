const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

const pais = funcionario => funcionario.pais === 'China'
const genero = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual ? func:funcAtual
}

const paisP = f => f.pais === 'Philippines'
const generoM = f => f.genero === 'M'
const empresa = f => f.empresa === 'Vidoo'

axios.get(url).then(response =>{ 
    const funcionarios = response.data
    // console.log(funcionarios)
    const mulher = funcionarios
                    .filter(pais)
                    .filter(genero)
                    .reduce(menorSalario)
    // console.log(mulher)

    const homem = funcionarios
                    .filter(paisP)
                    .filter(generoM)
                    .filter(empresa)
    // console.log(homem)

    const generoMale = funcionarios.filter(generoM).reduce(menorSalario)
    const generoF = funcionarios.filter(genero).reduce(menorSalario)

    console.log(generoMale)
    console.log(generoF)
})

