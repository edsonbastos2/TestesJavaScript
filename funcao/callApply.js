function getpreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 2149.90,
    desc: 0.15,
    getpreco
}
global.preco = 20
global.desc = 0.1
console.log(getpreco())
console.log(produto.getpreco())

const carro = {preco: 49998, desc: 0.20}

console.log(getpreco.call(carro))
console.log(getpreco.apply(carro))