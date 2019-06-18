function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId

    this.mostrar = function(){
        console.log(`Mimha empresa ${thisnome}`)
    }
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até logo', 456)
console.log(aula1, aula2)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem-vindo', 123)
const aula4 = novo(Aula, 'Até logo', 456)
console.log(aula3, aula4)