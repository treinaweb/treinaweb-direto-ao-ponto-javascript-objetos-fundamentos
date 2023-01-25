const carro = {
    marca: 'Toyota',
    ano: 2023,
    proprietario: {
        nome: 'Ariel',
        idade: 25,
    },
    ligar() {
        console.log('O carro ligou');
    }
}

delete carro['proprietario']['nome'];
delete carro.proprietario;
delete carro.marca;
delete carro['ligar'];


console.log(carro);