const pessoa = {
    nome: 'fulano',
    idade: 00,
    nacionalidade: 'Brasil'
}

const p1 = Object.create(pessoa,{
    nome:{value:'Edson', writable: false, enumerable: true}
    // idade: {value:32, writable:false, enumerable:true},
    // nacionalidade: {value: 'Brasileiro', writable: false, enumerable:true}
})

const p2 = Object.create(pessoa)
p2.nome = 'Carla'

console.log(p2)
console.log(p1)

for(let key in p1){

    p1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}