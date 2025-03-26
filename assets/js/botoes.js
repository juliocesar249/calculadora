const formulario = document.querySelector("#formulario");
const opercaoes = {
    0: ["+", "-", "x", "/", "=", "⬅"],
    1: ["soma", "subtracao", "multiplicacao", "divisao", "resultado", "apagar"]
};

for (let i = 1; i !== 12; i++) {
    const botao = document.createElement("button");
    botao.classList.add("digitos__digito");
    if(i === 10) {
        botao.append(0);
        botao.value = 0;
    } else if (i === 11){
        botao.value = ','
        botao.append(',');
    } else {
        botao.value = i;
        botao.append(i);
    }

    formulario.children[0].children[1].appendChild(botao);
};

for(let i = 0; i < 6; i++) {
    const botao = document.createElement("button");
    botao.classList.add("digitos__digito", "digitos__digito--grande", opercaoes[1][i]);
    botao.append(opercaoes[0][i]);
    if(i !== 5) {
        botao.value = opercaoes[0][i];
    } else {
        botao.value = "apagar"
    }
    formulario.children[0].children[1].appendChild(botao);
}

export default formulario;