const ferrari = {
    modelo: 'F40',
    velocidade: 320
}

const volvo = {
    modelo: 'V30',
    velocidade: 220
}

function meuObjeto(){}
console.log(Object.prototype.__proto__ === null)
console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype, meuObjeto.prototype)
console.log(ferrari.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)