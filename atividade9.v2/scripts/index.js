document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;  
    const senha = document.getElementById('senha').value;    
    const mensagemErro = document.getElementById('msg-erro');

    if (usuario === 'admin' && senha !== 'admin') {
        mensagemErro.textContent = 'Senha incorreta!';
    } else if (usuario !== 'admin') {
        mensagemErro.textContent = 'Usuário ou senha incorretos!';
    } else if (usuario === 'admin' && senha === 'admin') {
        mensagemErro.textContent = '';
        window.location.href = 'cadastro.html';
    }
});
