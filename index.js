const pessoa = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}

for (const chave in pessoa) {
    console.log(chave, ": ", pessoa[chave]);
}

// ["nome", "Ariel"]
// ["sobrenome", "Sardinha"]
for (const [chave, valor] of Object.entries(pessoa)) {
    console.log(chave, ': ', valor);
}