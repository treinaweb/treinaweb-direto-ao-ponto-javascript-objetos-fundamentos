const usuario = {
    nome: 'Ariel',
    tipo: 'admin',
    idade: 29,
    residencia: {
        rua: 'Rua x',
        numero: 123,
        bairro: 'Bairro y'
    },
    telefones: {
        nome: 'Ariel',
        numero: {
            n1: '999999999',
            n2: '218888888'
        },
        adicionarTelefone() {
            usuario.telefones.numero.n3 = '31777777';
        }
    }
}

usuario.telefones.adicionarTelefone();
console.log(usuario.telefones.numero);



