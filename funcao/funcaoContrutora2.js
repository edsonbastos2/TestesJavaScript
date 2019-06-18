function Carro(nome, modelo, velocidadeMaxima = 200, delta = 5){
    this.nome = nome
    this.modelo = modelo
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidade = function(){
        return velocidadeAtual
    }
}

const ferrari = new Carro('Ferrari', 'F40', 320, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(`Nome: ${ferrari.nome} Modelo: ${ferrari.modelo} Velocidade: ${ferrari.getVelocidade()}`)
