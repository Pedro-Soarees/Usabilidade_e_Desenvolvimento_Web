// ------------------------------------------------- COMPRA --------------------------------------------

// Função para validar o CPF
function validarCPF(cpf) {
    const regexCpf = /^\d{11}$/;
    return regexCpf.test(cpf); // Valida se o CPF tem exatamente 11 dígitos
}

// Atualiza o título da página com o nome e preço do produto (isso ocorre assim que a página for carregada) 
// Não sei direito como funciona mas foi a solução que apareceu pra fazer funcionar e ta funcionando, depois eu tento entender melhor.
window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const produto = params.get('produto');
    const preco = params.get('preco');

    // Exibe o nome do produto e o preço no título da página baseado no item que eu escolhi
    if (produto && preco) {
        document.querySelector('.compra h1').textContent = "Compra do produto: " + produto + " - R$" + preco + ".";
    }
});

document.getElementById('formCompra').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário para fazer a validação primeiro

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    const dataNascimento = document.getElementById('dataNascimento').value;
    const endereco = document.getElementById('endereco').value;
    const metodo = document.getElementById('metodo').value;

    // Validação de CPF (11 números) (ficaram 2 validadores, não sei pq, deixa assim)
    if (!validarCPF(cpf)) {
        alert('CPF deve conter exatamente 11 números.');
        return; // Impede a continuação se o CPF for inválido
    }

    // Recupera os parâmetros da URL para exibir no alert
    const params = new URLSearchParams(window.location.search);
    const produto = params.get('produto');
    const preco = params.get('preco');

    // Exibe as informações da compra
    alert("Compra realizada! Produto: " + produto + 
        "\nPreço: R$" + preco + 
        "\nNome: " + nome + 
        "\nCPF: " + cpf + 
        "\nData de Nascimento: " + dataNascimento + 
        "\nEndereço: " + endereco + 
        "\nMétodo de pagamento: " + metodo);

        window.location.href = 'index.html'; // te joga pra página inicial
});

