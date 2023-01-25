const pessoa = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}

const carro = {
    marca: 'Toyota',
    proprietario: { ...pessoa }
}

const carros = [carro];

const empresa = {
    nome: 'Toyota',
    carros
}

console.log(empresa.carros);