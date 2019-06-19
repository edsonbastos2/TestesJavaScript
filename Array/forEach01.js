const aluno = ['Bia', 'Bruno', 'Carla']

aluno.forEach( (nome, indice) =>{
    console.log(`${indice + 1}) ${nome}`)
})

aluno.forEach(nome => console.log(nome))