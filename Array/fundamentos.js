let aprovados = ['Edson', 'Bia', 'Wanessa']
console.log(aprovados)
aprovados[3] = 'Bob'
aprovados.push('Maria') // Adicionar um elemento na ultima posição
aprovados.sort() // Organiza o array, mais não altera o array original
console.log(aprovados)

aprovados.splice(1, 0, 'Maicon', 'Jim')
aprovados.sort()
console.log(aprovados)

