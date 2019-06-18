function criandoProduto(nome,preco,desc){
    this.nome = nome
    this.getPrecoDesco = () => {
        return preco * (1-desc)
    }
}

const p1 = new criandoProduto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoDesco().toFixed(2))

function criaFuncionario(nome,salaBase,faltas){
    return {
        nome,
        salaBase,
        faltas,
        getSalario(){
            return (salaBase / 30) * (30 - faltas)
        }
    }
}

const f1 = new criaFuncionario('Maria', 7980, 4)
const f2 = new criaFuncionario('Mario', 11400,1)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))