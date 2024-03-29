class Lancamento{
    constructor(nome,valor){
        this.nome = nome
        this.valor = valor
    }
}

class Ciclofinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano =ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach( l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new Ciclofinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario().toFixed(2))


