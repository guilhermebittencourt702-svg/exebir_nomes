
const nomes = [];

const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");

function mostrarNomes() {
    lista.innerHTML = "";

    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        campoNome.value = "";
        mostrarNomes();
    } else {
        alert("Digite um nome!");
    }
});

mostrarNomes();
