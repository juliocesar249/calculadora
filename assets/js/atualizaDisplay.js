'use strict';
const visor = formulario.querySelector(".container__visor");

/**
 * @param {string} valor
 */
const atualizaDisplay = function(valor) {
    if(valor.includes(".")) {
        visor.value = valor.replace(".", ",")
        return;
    }
    visor.value = valor;
}
export default atualizaDisplay;