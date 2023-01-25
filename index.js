/// propriedades -> são as caracteristicas do objeto
/// método -> são as ações realizadas pelo objeto

const carro = {
    marca: 'Toyota',
    modelo: 'Corola',
    ano: '2023',
    ligar: function () {
        console.log('O carro ligou.');
    },
    desligar() {
        console.log('O carro desligou');

    }
}

console.log(carro.modelo);
console.log(carro.marca);
carro.ligar();
carro.desligar();


const pessoa = new Object({
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
    apresentar() {

        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
})

pessoa.apresentar();
