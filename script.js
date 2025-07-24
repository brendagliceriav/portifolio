const frases = [
  "Desenvolvedora",
  "Analista de Dados",
  "Especialista em Automação",
  "Criadora do Jocidômetro"
];

let index = 0;
let letra = 0;
const destino = document.querySelector(".digitando");

function digitar() {
  if (letra < frases[index].length) {
    destino.textContent += frases[index].charAt(letra);
    letra++;
    setTimeout(digitar, 100);
  } else {
    setTimeout(apagar, 2000);
  }
}

function apagar() {
  if (letra > 0) {
    destino.textContent = frases[index].substring(0, letra - 1);
    letra--;
    setTimeout(apagar, 50);
  } else {
    index = (index + 1) % frases.length;
    setTimeout(digitar, 300);
  }
}

document.addEventListener("DOMContentLoaded", digitar);
