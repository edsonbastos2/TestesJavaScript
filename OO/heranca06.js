console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Edson Bastos'.reverse())

Array.prototype.first = function(){
    return this[0]
}
const teste = [1,2,3,4]
const teste2 = ['a','b','c']
console.log(teste.first())
console.log(teste2.first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Edsom Bastos'.reverse())

