const pessoa = {
    saudacao: 'Boa tarde',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar2 = pessoa.falar
falar2()

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()