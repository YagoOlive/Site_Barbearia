document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtenha os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
  
    // teria que adicionar a lógica para armazenar os dados no banco de dados e enviar notificações
  
    // Exemplo de exibição das informações no console
    console.log('Nome: ' + name);
    console.log('Telefone: ' + phone);
    console.log('Data: ' + date);
    console.log('Horário: ' + time);
  
    // Limpa os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
  });
  