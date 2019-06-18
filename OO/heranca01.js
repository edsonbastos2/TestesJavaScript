const avo = {attr1: 'A'}
const pai = { __proto__:avo, attr2: 'B'}
const filho = { __proto__:pai, attr3: 'C'}

console.log(filho.attr1)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,

    aceleraMais(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
            this.velocidadeAtual += delta
        }else{
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status(){
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo: 'V30',
    
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
ferrari.aceleraMais(300)
volvo.aceleraMais(300)
console.log(ferrari.status())
console.log(volvo.status())
// console.log(ferrari)