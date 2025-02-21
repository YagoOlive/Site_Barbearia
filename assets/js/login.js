// Função para exibir mensagens de erro
function exibirErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
  }
  
  // Função para exibir/ocultar o spinner
  function exibirSpinner() {
    document.getElementById("spinner").style.display = "block";
  }
  
  function ocultarSpinner() {
    document.getElementById("spinner").style.display = "none";
  }
  
  // Função para redirecionar o usuário após o login
  function redirecionar() {
    window.location.href = "Agendamento.html";
  }
  
  // Função para realizar o login
  async function login() {
    // Coletar os dados do formulário
    const usuario = document.getElementById("cUsuario").value;
    const senha = document.getElementById("cSenha").value;
  
    // Validar os dados
    if (usuario === "" || senha === "") {
      exibirErro("Por favor, preencha todos os campos.");
      return;
    }
  
    // Dados para enviar à API
    const dados = {
      usuario: usuario,
      senha: senha,
    };
  
    try {
      exibirSpinner(); // Exibe o spinner
  
      // Enviar os dados para a API
      const resposta = await fetch("https://sua-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
  
      // Verificar se a requisição foi bem-sucedida
      if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.mensagem || "Erro ao realizar login.");
      }
  
      // Se tudo estiver certo, redirecionar o usuário
      redirecionar();
    } catch (erro) {
      // Exibir mensagem de erro
      exibirErro(erro.message);
    } finally {
      ocultarSpinner(); // Oculta o spinner
    }
  }
  
  // Adicionar evento ao formulário de login
  document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");
    formLogin.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio do formulário
      login();
    });
  });