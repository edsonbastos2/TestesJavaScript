// Factory simples
function criarPessoa(nome,email){
    return {
        nome,
        email
    }
}

console.log(criarPessoa('Edson', 'edsonbastos2@hotmail.com'))

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desc: 0.1
    }
}
console.log(criarProduto('Notebook', 2134))
console.log(criarProduto('iPad', 1134))