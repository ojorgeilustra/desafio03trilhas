// titulo.js
var nomeCompleto = "Jorge Menezes";
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");
var atraso = 200;

var contadorDeLetras = 0;

function escreverTexto() {
    if (contadorDeLetras < nomeCompleto.length) {
        var letra = document.createElement("span");
        if (nomeCompleto[contadorDeLetras] === " ") {
            letra.textContent = "\u00A0"; // Espaço não-quebável
        } else {
            letra.textContent = nomeCompleto[contadorDeLetras];
        }

        if (contadorDeLetras >= 5) {
            letra.classList.add("sobrenome");
        }

        textoElemento.appendChild(letra);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }
}

escreverTexto();
