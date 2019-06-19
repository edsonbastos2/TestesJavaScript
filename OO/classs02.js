class Avo{
    constructor(sobreNome){
        this.sobreNome = sobreNome
    }
}

class Pai extends Avo{
    constructor(sobreNome, profissao = 'Professor'){
        super(sobreNome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Bastos', 'Analista de Sistemas')
    }
}

const filho = new Filho
console.log(filho)