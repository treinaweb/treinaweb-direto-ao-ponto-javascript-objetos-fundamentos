// JavaScript Object Notation
// Notação de objeto JavaScript
const pessoa = {
    nome: 'Ariel',
    sobrenome: 'Sardinha',
    idade: 29,
}

const json = JSON.stringify(pessoa);

console.log(json);

const jsonConvertido = JSON.parse(json);

console.log(jsonConvertido);