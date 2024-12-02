let descontoAplicado = 0; // Variável global para armazenar o desconto

document.getElementById("formJogo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Números sorteados
    const numerosSorteados = [4, 12, 89];

    // Pega os números escolhidos pelo cliente
    const numerosEscolhidos = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
        parseInt(document.getElementById("num4").value),
        parseInt(document.getElementById("num5").value),
        parseInt(document.getElementById("num6").value)
    ];

    // Verifica os acertos
    let acertos = 0;
    for (let i = 0; i < numerosEscolhidos.length; i++) {
        if (numerosSorteados.includes(numerosEscolhidos[i])) {
            acertos++;
        }
    }

    // Calcula o desconto
    descontoAplicado = acertos * 15; // 15% por acerto

    // Exibe a mensagem com o desconto
    const mensagemDesconto = document.getElementById("descontoMensagem");
    if (acertos > 0) {
        mensagemDesconto.innerHTML = `Parabéns! Você acertou ${acertos} número(s) e ganhou ${descontoAplicado}% de desconto!`;
    } else {
        mensagemDesconto.innerHTML = `Que pena! Você não acertou nenhum número. Tente novamente!`;
    }
});

document.getElementById("formPreco").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Pega o valor escolhido pelo cliente
    const valorEscolhido = parseFloat(document.getElementById("valorEscolhido").value);

    // Verifica se há desconto
    if (descontoAplicado > 0) {
        // Calcula o valor final com o desconto
        const valorFinal = valorEscolhido * (1 - descontoAplicado / 100);

        // Exibe o valor final com o desconto aplicado
        const mensagemPreco = document.getElementById("desconto");
        mensagemPreco.innerHTML = `Você escolheu pagar R$${valorEscolhido.toFixed(2)}. Com o desconto de ${descontoAplicado}%, o valor final é R$${valorFinal.toFixed(2)}.`;
    } else {
        // Caso não tenha desconto
        const mensagemPreco = document.getElementById("desconto");
        mensagemPreco.innerHTML = `Você escolheu pagar R$${valorEscolhido.toFixed(2)}. Não há desconto aplicado.`;
    }
});
