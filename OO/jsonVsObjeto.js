const objt = {nome: 'nome', idade:12, sexo:'M', teste(){},}

console.log(JSON.stringify(objt))

console.log(JSON.parse('{"a":"nome", "b":12, "c":true, "d":{}, "e":[]}'))
console.log(JSON.parse('{"a":1, "b":"String", "c":true}'))
