const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2023,
    proprietario: {
        nome: 'Ariel',
        editarNome() {
            // o this representa o objeto pai, no caso o proprietario


            // carro.marca = 'Fiat';
            // carro.proprietario.nome = 'Carlos';
            // this.nome = 'Pedro';
        }
    },
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


