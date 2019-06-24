const produtos = [
    {nome:'Notebook', preco:2499, fragil:true},
    {nome:'iPad Pro', preco:4199, fragil:true},
    {nome:'Copo de vidro', preco:12.49, fragil:true},
    {nome:'Copo de Plastico', preco:18.99, fragil:false}
]

const caro = p => p.preco >= 500
const fragil = p => p.fragil

console.log(produtos.filter(caro).filter(fragil))
console.log('-------------------------------------')
console.log(produtos.filter( p => p.preco >= 1000))