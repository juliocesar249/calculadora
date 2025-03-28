'use strict';
import atualizaDisplay from "./atualizaDisplay.js";
import formulario from "./botoes.js";
const operacoes = {
    "soma": (n1, n2) => n1 + n2,
    "subtracao": (n1,n2) => n1 - n2,
    "multiplicacao" : (n1, n2) => n1 * n2,
    "divisao" : (n1, n2) => n1 / n2
};
const calculadora = {
    n1: "0",
    n2: "0",
    operacao: "",
    resultado: ""
};
console.clear(); //! para debug
console.table(calculadora); //! para debug
function calcula(n1, n2, operacao) {
    if(n1 === "" || n2 === "") {
        window.alert("Não há números definidos!");
        console.warn("Faltam números para calcular.");
        return;
    }

    if(operacao === "divisao" && n2 === "0") {
        window.alert("Não é possível dividir por zero!");
        console.warn("Tentativa de divisão por zero.");
        apagar();
        return;
    }
    let num1 = Number(n1);
    let num2 = Number(n2);
    calculadora.resultado = String(operacoes[operacao](num1, num2));
    atualizaDisplay(calculadora.resultado);
}
function apagar() {
    if(calculadora.resultado.length === 0) {
        let numeroParaApagar = calculadora.operacao.length === 0 ? "n1" : "n2";
        calculadora[numeroParaApagar] = calculadora[numeroParaApagar].slice(0, -1);
        if(calculadora[numeroParaApagar].length === 0) atribuiNumero();
        atualizaDisplay(calculadora[numeroParaApagar]);
    } else {
        Object.assign(calculadora, {n1: "0", n2: "0", operacao: "", resultado: ""});
        atualizaDisplay(calculadora.n2);
    }
}
function atribuiNumero(valor = '0') {
    const numeroParaSetar = calculadora.operacao.length === 0 ? "n1" : "n2";
    switch (true) {
        case (valor === "." && !calculadora[numeroParaSetar].includes(".")):
            calculadora[numeroParaSetar] += valor;
            break;
        case (valor !== "." && calculadora[numeroParaSetar] === "0"):
            calculadora[numeroParaSetar] = valor;
            break;
        case (valor !== "."):
            calculadora[numeroParaSetar] += valor;
            break;
        default:
            break;
    };
    
    atualizaDisplay(calculadora[numeroParaSetar]); 
    console.clear(); //! para debug
    console.table(calculadora); //! para debug
}

function proximaOperacao() {
    if(calculadora.resultado.length > 0) {
        calculadora.n1 = calculadora.resultado;
        calculadora.n2 = "0";
        calculadora.resultado = "";
    };
    return;
}
function atribuiOperacao(operacao) {
    if(operacao === "resultado") {
        if(calculadora.operacao.length === 0) {
            window.alert("Sem operação definida!");
            console.warn("não há operação definida!");
            return;
        }
        calcula(calculadora.n1, calculadora.n2, calculadora.operacao);
    } else if(operacao === "apagar") {
        apagar();
    } else {
        if(calculadora.operacao.length > 0 && calculadora.n2.length > 0) {
            calcula(calculadora.n1, calculadora.n2, calculadora.operacao);
            proximaOperacao();
            calculadora.operacao = operacao;
        } else {
            proximaOperacao();
            calculadora.operacao = operacao;
        }
    }
}
formulario.onsubmit = e => e.preventDefault();

atualizaDisplay(calculadora.n1);

formulario.querySelectorAll(".numero").forEach(elemento => 
    elemento.addEventListener("click", e => {
    if(calculadora.resultado.length > 0) {
        apagar();
        atribuiNumero(e.target.value);
    } else {
        atribuiNumero(e.target.value);
    }
}));

formulario.querySelectorAll(".operacao").forEach(elemento => {
    elemento.addEventListener("click", e =>{
        atribuiOperacao(e.target.value);
        console.clear(); //! para debug
        console.table(calculadora) //! para debug
    });
});

export default calculadora;