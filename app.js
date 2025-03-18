// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];
let estadoAnterior = {
    sorteados: [],
    resultado: ''
};

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        mostrarMensagem('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        mostrarMensagem('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    input.focus();
    atualizarLista();
}

// Função para exibir mensagens de forma mais amigável
function mostrarMensagem(msg) {
    const mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = msg;
    mensagemElemento.style.display = 'block';
    setTimeout(() => {
        mensagemElemento.style.display = 'none';
    }, 3000);
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensagem('Não há nomes suficientes! Insira ao menos um nome.');
        return;
    }

    if (sorteados.length === amigos.length) {
        mostrarMensagem('Todos os nomes já foram sorteados.');
        return;
    }

    // Salva o estado anterior
    estadoAnterior.sorteados = [...sorteados];
    estadoAnterior.resultado = document.getElementById('resultado').textContent;

    let indiceSorteado;
    let amigoSorteado;

    do {
        indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (sorteados.includes(amigoSorteado));

    sorteados.push(amigoSorteado);

    // Exibe o resultado de forma mais limpa
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}

