
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
            
            document.addEventListener("DOMContentLoaded", function() {
                var botaoCadastro = document.getElementById("btn-cadastro");
                botaoCadastro.addEventListener("click", function(event) {
                    event.preventDefault();  // Evita o envio do formulário
                    cadastrar();
                });
            });
