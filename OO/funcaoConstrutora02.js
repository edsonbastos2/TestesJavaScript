function Pessoa(nome,email,idade, sexo, setor){
    this.nome = nome
    this.email = email
    this.idade = idade
    this.sexo = sexo
    this.setor = setor

    this.status = function(){
        return `Funcionario nome: ${nome} e-mail: ${email} sexo: ${sexo} setor: ${setor}`
    }
}

const p1 = new Pessoa('Edson', 'edson@bastos.com', 32, 'M', 'T.I')
console.log(p1.status())


