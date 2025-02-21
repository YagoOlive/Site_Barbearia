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

// Função para enviar os dados do agendamento
async function agendar(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Coletar os dados do formulário
  const nome = document.getElementById("name").value;
  const telefone = document.getElementById("phone").value;
  const data = document.getElementById("date").value;
  const horario = document.getElementById("time").value;

  // Validar os dados
  if (nome === "" || telefone === "" || data === "" || horario === "") {
    exibirErro("Por favor, preencha todos os campos.");
    return;
  }

  // Dados para enviar à API
  const dados = {
    nome: nome,
    telefone: telefone,
    data: data,
    horario: horario,
  };

  try {
    exibirSpinner(); // Exibe o spinner

    // Enviar os dados para a API
    const resposta = await fetch("https://sua-api.com/agendamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    // Verificar se a requisição foi bem-sucedida
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.mensagem || "Erro ao agendar.");
    }

    // Se tudo estiver certo, exibir mensagem de sucesso
    alert("Agendamento realizado com sucesso!");
    document.getElementById("appointmentForm").reset(); // Limpa o formulário
  } catch (erro) {
    // Exibir mensagem de erro
    exibirErro(erro.message);
  } finally {
    ocultarSpinner(); // Oculta o spinner
  }
}

// Adicionar evento ao formulário de agendamento
document.addEventListener("DOMContentLoaded", function () {
  const formAgendamento = document.getElementById("appointmentForm");
  formAgendamento.addEventListener("submit", agendar);
});
