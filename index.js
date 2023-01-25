const carro = {
    marca: 'Toyota',
    modelo: 'Corola'
}

// atribuir novo método e propriedade pela notação de ponto
carro.ano = 2023;
carro.ligar = () => {
    console.log('O carro ligou');
}

// atribuir novo método e propriedade pela notação de colchetes
carro['proprietario'] = 'Ariel';
carro['editarProprietario'] = function (novoProprietario) {
    console.log(`O novo proprietário é: ${novoProprietario}`);
    this.proprietario = novoProprietario;
}

// carro['editarProprietario']('Pedro');

carro.editarProprietario('Daniel');

console.log(carro);
