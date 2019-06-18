class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('Edson')
p2.falar()

const criarPessoa = (nome) => {
    return{
        falar(){ console.log(`Meu nome é ${nome}`)}
    }
}

const p3 = criarPessoa('Edson')
p3.falar()