const pessoa = { 
    nome: 'Edson',
    idade: 32,
    peso:80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( ([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '14/06/2019'
})

pessoa.dataNascimento = '12/09/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const cont = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(cont,o1,o2)
Object.freeze(obj)
obj.c = 123

console.log(obj)

Object.entries(pessoa).forEach( ([key,value]) => {
    console.log(`${key}: ${value}`)
}) 