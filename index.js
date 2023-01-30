const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2023,
    proprietario: "Ariel",
    "chassi": '123456',
    "@": "@@",
    ligar() {
        console.log('O carro ligou');
    },
    desligar() {
        console.log('O carro desligou');
    }
}
carro.ano = 2024;
carro.ligar = () => {
    console.log('Novo método: O carro ligou');
}

carro['proprietario'] = 'Pedro';
carro['chassi'] = '456';

carro['@'] = 'novo @';

console.log(carro);


