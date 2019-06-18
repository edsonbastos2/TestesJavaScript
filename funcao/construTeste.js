function Pessoa(nome,email){
    this.nome = nome
    this.email = email

    this.falar = function(){
        console.log(`Meu nome é ${this.nome} E-mail: ${this.email}`)
    }
}

const p2 = new Pessoa('Edson', 'edsonbastos2@hotmail.com')
p2.falar()
const p3 = new Pessoa('Alex Green', 'alex@gmail.com')
p3.falar()