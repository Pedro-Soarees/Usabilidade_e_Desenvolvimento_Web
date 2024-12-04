let desconto = 0; 

document.getElementById("formJogo").addEventListener("submit", function(event) { //procura a página HTML que tem o "formJogo", cria uma situação de que quando eu dou o submit no form acontece o evento abaixo:
    event.preventDefault(); // Evita o comportamento padrão que seria recarregar a página e fechar tudo...
    
    // números vencedores martelados
    const numerosVencedores = [4, 12, 89];

    // array dos numeros escolhidos
    const numerosEscolhidos = [
        parseInt(document.getElementById("num1").value), // parseInt para transformar os números em inteiro
        parseInt(document.getElementById("num2").value), // getElementByID.value pega o valor cadastrado no ("numX")
        parseInt(document.getElementById("num3").value), 
        parseInt(document.getElementById("num4").value),
        parseInt(document.getElementById("num5").value),
        parseInt(document.getElementById("num6").value)
    ];

// For para verificar acertos
//    let acertos = 0;
//    for (let i = 0; i < numerosEscolhidos.length; i++) {
//        if (numerosVencedores.includes(numerosEscolhidos[i])) {
//            acertos++;
//        }
//    }

    // For para verificar acertos, ignorando números repetidos
    let acertos = 0;
    const numerosVerificados = []; // Array para armazenar números já contados

    for (let i = 0; i < numerosEscolhidos.length; i++) {
        if (
            numerosVencedores.includes(numerosEscolhidos[i]) && // Verifica se o número é um vencedor
            !numerosVerificados.includes(numerosEscolhidos[i]) // Verifica se o número apareceu antes.
        ) {
            acertos++;
            numerosVerificados.push(numerosEscolhidos[i]); // Caso seja um vencedor e não tiver aparecido antes, o programa adiciona no numeros escolhidos
        }                                                  // pra não se repetir e aumenta o contador de acertos (15% desc)
    }


    // Calculadora básica do desconto
    desconto = acertos * 15; // 15% por acerto

    // Exibe a mensagem de desconto
    const mensagemDesc = document.getElementById("descontoMensagem");
    if (acertos > 0) {
        mensagemDesc.innerHTML = "Parabéns! Você acertou " + acertos + " número(s) e ganhou " + desconto + "% de desconto!";

    } else {
        mensagemDesc.innerHTML = `Que pena! Você não acertou nenhum número. Tente novamente!`;
    }
});

document.getElementById("formPreco").addEventListener("submit", function(event) { // mesma coisa que acima, mas pro form preço
    event.preventDefault(); 

    // Pega o valor que o cliente escolheu, transforma em float e guarda
    const valorEscolhido = parseFloat(document.getElementById("valorEscolhido").value);

    // Verifica se há desconto
    if (desconto > 0) {
        // Calcula o valor final com o desconto
        const valorFinal = valorEscolhido * (1 - desconto / 100);

        // Mensagens com desconto ou não
        const mensagemPreco = document.getElementById("desconto");
        mensagemPreco.innerHTML = "Você escolheu pagar R$" + valorEscolhido.toFixed(2) + ". Com o desconto de " + desconto + "%, o valor final é R$" + valorFinal.toFixed(2) + ".";
    } else { // Utiliza o toFixed(2) para truncar o valor em 2 casas decimais. 
        const mensagemPreco = document.getElementById("desconto");
        mensagemPreco.innerHTML = "Você escolheu pagar R$" + valorEscolhido.toFixed(2) + ". Não há desconto aplicado.";
    }
});
