const pessoa = {
    nome: 'Ariel',
    sobrenome: 'Santiago',
    idade: 29,
    ligar() { }
};

if ("nome" in pessoa) {
    console.log("Existe o nome no objeto pessoa");
}

if (pessoa.sobrenome !== undefined) {
    console.log('Existe o sobrenome no objeto pessoa');
}

if (pessoa['sobrenome'] !== undefined) {
    console.log('Existe o sobrenome no objeto pessoa');
}

if (pessoa.hasOwnProperty('idade')) {
    console.log('Existe a idade no objeto pessoa');
}

if (pessoa.hasOwnProperty('ligar')) {
    console.log('Existe o método ligar no objeto pessoa');
}


