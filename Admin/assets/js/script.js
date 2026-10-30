
// FORMULÁRIO DE LOGIN

const formulario = document.getElementById("formLogin");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("mensagem").textContent =
            "Formulário preenchido com sucesso!";

    });

}


// PESQUISA DE USUÁRIOS

function filtrarUsuarios() {

    const campo = document.getElementById("pesquisa");

    const pesquisa = campo.value.toLowerCase();

    const linhas = document.querySelectorAll("#tabelaUsuarios tr");

    let encontrados = 0;

    linhas.forEach(function(linha) {

        const usuario = linha.textContent.toLowerCase();

        if (usuario.includes(pesquisa)) {

            linha.style.display = "";
            encontrados++;

        } else {

            linha.style.display = "none";

        }

    });

    const mensagem = document.getElementById("semResultado");

    if (encontrados === 0) {
        mensagem.textContent = "Nenhum usuário encontrado.";
    } else {
        mensagem.textContent = "";
    }

}
