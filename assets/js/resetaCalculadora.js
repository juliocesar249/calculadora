"use strict";
import atualizaDisplay from "./atualizaDisplay.js";
import calculadora from "./operacoes.js"


document.querySelector(".principal__reset").addEventListener("click", e => {
    console.log("ola")
    Object.assign(calculadora, {n1: "0", n2:"0", operacao: "", resultado: ""});
    atualizaDisplay(calculadora.n1);
    console.clear();
    console.table(calculadora);
});