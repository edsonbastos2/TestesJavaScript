const pai = {nome: 'Edson', corCabelo: 'Preto'}

const filha = Object.create(pai)
filha.nome = 'Wanessa'
console.log(filha)
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome:{value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key): console.log(`Por herança: ${key}`)
}

for(let key in filha){
    console.log(key)
}