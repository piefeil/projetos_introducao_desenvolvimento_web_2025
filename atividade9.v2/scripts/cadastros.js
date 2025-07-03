const pessoas = [];
let indiceAtual = -1;
let modoEdicao = false;


const form = document.getElementById('form');
const nomeInput = document.getElementById('usuario');
const sobrenomeInput = document.getElementById('sobrenome');
const enderecoInput = document.getElementById('endereco');
const telefoneInput = document.getElementById('telefone');


const btnIncluir = document.getElementById('button-incluir');
const btnEditar = document.getElementById('button-editar');
const btnSalvar = document.getElementById('button-salvar');
const btnCancelar = document.getElementById('button-cancelar');
const btnExcluir = document.getElementById('button-excluir');

const btnPrimeiro = document.getElementById('button-primeiro');
const btnAnterior = document.getElementById('button-anterior');
const btnProximo = document.getElementById('button-proximo');
const btnUltimo = document.getElementById('button-ultimo');


function limparCampos() {
    nomeInput.value = '';
    sobrenomeInput.value = '';
    enderecoInput.value = '';
    telefoneInput.value = '';
}

function carregarPessoa(index) {
    if (index >= 0 && index < pessoas.length) {
        const p = pessoas[index];
        nomeInput.value = p.nome;
        sobrenomeInput.value = p.sobrenome;
        enderecoInput.value = p.endereco;
        telefoneInput.value = p.telefone;
        indiceAtual = index;
    }
}

function atualizarExibicao() {
    if (pessoas.length === 0 || indiceAtual < 0) {
        limparCampos();
    } else {
        carregarPessoa(indiceAtual);
    }
}


btnIncluir.addEventListener('click', (e) => {
    e.preventDefault();
    limparCampos();
    modoEdicao = false;
    indiceAtual = -1;
});

btnEditar.addEventListener('click', (e) => {
    e.preventDefault();
    if (indiceAtual >= 0) {
        modoEdicao = true;
    } else {
        alert("Nenhum contato selecionado.");
    }
});

btnSalvar.addEventListener('click', (e) => {
    e.preventDefault();

    const pessoa = {
        nome: nomeInput.value,
        sobrenome: sobrenomeInput.value,
        endereco: enderecoInput.value,
        telefone: telefoneInput.value
    };

    if (modoEdicao && indiceAtual >= 0) {
        pessoas[indiceAtual] = pessoa;
        alert("Contato atualizado com sucesso.");
    } else {
        pessoas.push(pessoa);
        indiceAtual = pessoas.length - 1;
        alert("Contato adicionado com sucesso.");
    }

    atualizarExibicao();
});

btnCancelar.addEventListener('click', (e) => {
    e.preventDefault();
    if (pessoas.length > 0 && indiceAtual >= 0) {
        carregarPessoa(indiceAtual);
    } else {
        limparCampos();
    }
});

btnExcluir.addEventListener('click', (e) => {
    e.preventDefault();

    if (indiceAtual >= 0) {
        pessoas.splice(indiceAtual, 1);
        if (indiceAtual >= pessoas.length) {
            indiceAtual = pessoas.length - 1;
        }
        atualizarExibicao();
        alert("Contato excluído.");
    } else {
        alert("Nenhum contato selecionado.");
    }
});


btnPrimeiro.addEventListener('click', (e) => {
    e.preventDefault();
    if (pessoas.length > 0) {
        indiceAtual = 0;
        carregarPessoa(indiceAtual);
    }
});

btnAnterior.addEventListener('click', (e) => {
    e.preventDefault();
    if (indiceAtual > 0) {
        indiceAtual--;
        carregarPessoa(indiceAtual);
    }
});

btnProximo.addEventListener('click', (e) => {
    e.preventDefault();
    if (indiceAtual < pessoas.length - 1) {
        indiceAtual++;
        carregarPessoa(indiceAtual);
    }
});

btnUltimo.addEventListener('click', (e) => {
    e.preventDefault();
    if (pessoas.length > 0) {
        indiceAtual = pessoas.length - 1;
        carregarPessoa(indiceAtual);
    }
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
});
