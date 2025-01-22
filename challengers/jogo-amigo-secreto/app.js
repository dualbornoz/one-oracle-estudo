let listaDeAmigoSecreto = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}

exibirMensagemInicial();

function adicionarAmigo(){
    let inputAmigo = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if(listaDeAmigoSecreto.includes(nomeAmigo)){
        alert('Esse nome já foi adicionado');
        return;
    }

    listaDeAmigoSecreto.push(nomeAmigo);
    limparCampo();
}


function sortearAmigo() {
    if (listaDeAmigoSecreto.length > 0) {
        let amigoSorteado = listaDeAmigoSecreto[parseInt(Math.random() * listaDeAmigoSecreto.length)];
        let resultadoSorteio = document.querySelector('#resultado');
        resultadoSorteio.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
        limparCampo();
    } else {
        console.log('Adicone pelo menos um nome antes de fazer o sorteio');
    }
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
