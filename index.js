
const { nome: nomePessoa, sobrenome } = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}


const { marca, proprietario: { idade, nome: nomeProprietarioDoCarro }, ...carro } = {
    marca: 'Toyota',
    proprietario: {
        nome: 'Carlos',
        idade: 29
    },
    ano: 2023,
    ligar() {
        console.log('ligou');
    }
}

console.log(nomePessoa, nomeProprietarioDoCarro);