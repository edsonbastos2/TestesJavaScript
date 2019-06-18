const pessoa ={
    nome: 'Edson',
    peso: 80,
    sexo: 'M'
}

for(atributo in pessoa){
    console.log(`${atributo}-${pessoa[atributo]}`)
}