document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar em enviar
    event.preventDefault();

    // Pega os valores digitados nos campos
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    // Validação 1: Verifica se os campos estão vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Erro: Por favor, preencha todos os campos do formulário!');
        return; 
    }

    // Validação 2: Verifica se o e-mail tem o símbolo "@" e "."
    if (!email.includes('@') || !email.includes('.')) {
        alert('Erro: Por favor, insira um endereço de e-mail válido!');
        return;
    }

    // Se passou pelas validações, simula o envio com sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpa os campos do formulário após o envio
    document.getElementById('meuFormulario').reset();
});