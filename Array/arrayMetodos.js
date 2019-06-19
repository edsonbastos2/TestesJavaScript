const pilotos = ['Verstappen','Alonso','Bottas', 'Massa']
pilotos.pop() // Retira o item da ultima posição
console.log(pilotos)
pilotos.push('Raikkoner') // Adiciona um elemento na ultima posição
pilotos.push('piloto3')
pilotos.shift() // Remove o da primeira posião
console.log(pilotos)
pilotos.unshift('Hamilton')

console.log(pilotos)
pilotos.splice(1,0, 'piloto1','piloto2') // Adciona e remove itens
console.log(pilotos)
const pilotos2 = pilotos.slice(1) // Retorna um novo array, da posição escolhida
console.log(pilotos2)
