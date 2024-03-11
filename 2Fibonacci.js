function verificarFibonacci(numero) {
    let primeiro = 0;
    let segundo = 1;
    let proximo;

    while (proximo <= numero) {
        if (proximo === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
        proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
    }

    return `${numero} não pertence à sequência de Fibonacci.`;
}

// Testando com um número específico
let numero = 62;
console.log(verificarFibonacci(numero)); // Saída: 62 não pertence à sequência de Fibonacci.
