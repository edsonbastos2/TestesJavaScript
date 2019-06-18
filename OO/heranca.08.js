const produto = Object.preventExtensions({
    nome:'QualquerCoisa', preco:1.99, tag: 'promoção'
})

console.log(produto)
produto.desc = 0.15
delete produto.tag
produto.nome = 'Caneta'
console.log(produto)

const pessoa = {
    nome: 'fulano',
    idade: 21,
}
Object.seal(pessoa)
pessoa.sobreNome = "Beltrano"
delete pessoa.nome
pessoa.idade = 32
console.log(pessoa)