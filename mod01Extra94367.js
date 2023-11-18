// import prompt from 'prompt';
const prompt = require('prompt-sync')();

function simples() {
    console.log("Função simples!!!");
}
// Função com parâmetros
function soma(valor1, valor2) {
    return valor1 + valor2;
}
// Arrow Function
const multiplicacao = (valor3, valor4) => valor3 * valor4;

simples();
console.log("Soma: " + soma(2, 3), "Multiplicação: " + multiplicacao(5, 3));