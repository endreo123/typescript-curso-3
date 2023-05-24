import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
const botaoImporta = document.querySelector("#botao-importa");

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

if(!botaoImporta){
    throw Error ('Botao importa não foi encontrado');
}else{
    botaoImporta.addEventListener('click', e => {
        controller.importaDados();
    })
}