// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function() {

  // Pega o formulário
  const form = document.getElementById("formContato");

  // Verifica se existe formulário (evita erro nas outras páginas)
  if (form) {

    // Evento ao enviar o formulário
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Impede recarregar a página

      // Pega os valores dos campos
      let nome = document.getElementById("nome").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensagem = document.getElementById("mensagem").value.trim();
      let msg = document.getElementById("msg");

      // Verifica se algum campo está vazio
      if (nome === "" || email === "" || mensagem === "") {
        msg.innerText = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
      }

      // Verifica se o email é válido
      if (!email.includes("@")) {
        msg.innerText = "Email inválido!";
        msg.style.color = "red";
        return;
      }

      // Mensagem de sucesso
      msg.innerText = "Mensagem enviada com sucesso!";
      msg.style.color = "green";

      // Limpa o formulário
      form.reset();
    });
  }
});