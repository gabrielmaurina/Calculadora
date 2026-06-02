function obterValores() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;

    return { num1, num2 };
}

function exibirResultado(valor) {
    document.getElementById("resultado").textContent = valor;
}

function somar() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 + num2);
}

function subtrair() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 * num2);
}

function dividir() {
    const { num1, num2 } = obterValores();

    if (num2 === 0) {
        exibirResultado("Erro: divisão por zero");
        return;
    }

    exibirResultado(num1 / num2);
}