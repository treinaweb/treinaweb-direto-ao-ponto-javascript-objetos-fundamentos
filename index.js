
const { nome, sobrenome } = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}
console.log(sobrenome);


const { marca, proprietario: { idade }, ...carro } = {
    marca: 'Toyota',
    proprietario: {
        nome: 'Ariel',
        idade: 29
    },
    ano: 2023,
    ligar() {
        console.log('ligou');
    }
}

console.log(carro, nome);