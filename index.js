const pessoa = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}

// ["nome","sobrenome","idade"]
const pessoaKeys = Object.keys(pessoa);

for (let i = 0; i < pessoaKeys.length; i++) {
    const chave = pessoaKeys[i]
    // console.log(chave, ': ', pessoa[chave]);
}

console.log(Object.values(pessoa));