function redirecionar() {
  // Função para redirecionar o usuário
  window.location.href = "Login.html";
}

function cadastrar() {
  // Função para verificar e armazenar os dados
  var usuario = document.getElementById("cUsuario").value;
  var email = document.getElementById("cE-mail").value;
  var telefone = document.getElementById("cTelefone").value;
  var senha = document.getElementById("cSenha").value;

  if (usuario === "" || email === "" || telefone === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Aqui você pode prosseguir com o armazenamento dos dados, se necessário
    redirecionar();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var botaoCadastro = document.getElementById("btn-cadastro");
  botaoCadastro.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    cadastrar();
  });
});
/*
// Função para redirecionar o usuário
function redirecionar() {
    window.location.href = "Login.html";
}

// Função para exibir mensagens de erro
function exibirErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
}

// Função para cadastrar o usuário
async function cadastrar() {
    // Coletar os dados do formulário
    const usuario = document.getElementById("cUsuario").value;
    const email = document.getElementById("cE-mail").value;
    const telefone = document.getElementById("cTelefone").value;
    const senha = document.getElementById("cSenha").value;

    // Validar os dados
    if (usuario === "" || email === "" || telefone === "" || senha === "") {
        exibirErro("Por favor, preencha todos os campos.");
        return;
    }

    // Dados para enviar à API
    const dados = {
        usuario: usuario,
        email: email,
        telefone: telefone,
        senha: senha
    };

    try {
        // Enviar os dados para a API
        const resposta = await fetch("https://sua-api.com/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        // Verificar se a requisição foi bem-sucedida
        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.mensagem || "Erro ao cadastrar usuário.");
        }

        // Se tudo estiver certo, redirecionar o usuário
        redirecionar();
    } catch (erro) {
        // Exibir mensagem de erro
        exibirErro(erro.message);
    }
}

// Adicionar evento ao botão de cadastro
document.addEventListener("DOMContentLoaded", function () {
    const botaoCadastro = document.getElementById("btn-cadastro");
    botaoCadastro.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o envio do formulário
        cadastrar();
    });
});
*/
