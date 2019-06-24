const nums = [1,2,3,4,5]

const result = nums.map( function(e){
    return e * 2
})
console.log(result)

const soma = e => e + 10
const triplo = e => e * 3
const moeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`



const result2 = nums.map(soma).map(triplo).map(moeda)

console.log(result2)