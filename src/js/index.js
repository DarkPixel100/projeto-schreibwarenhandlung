let senha = document.getElementById("senha");
let olho = document.getElementById("mostrar");
senha.submit;
// Clique mostra a senha em texto plano
olho.addEventListener('click', () => {
  if (senha.type === 'password') {
    senha.type = 'text'; // Trocando o tipo do input
    // Trocando a classe que define o ícone do FontAwesome
    olho.children[0].classList.add('fa-eye');
    olho.children[0].classList.remove('fa-eye-slash');
  } else {
    olho.children[0].classList.add('fa-eye-slash');
    olho.children[0].classList.remove('fa-eye');
    senha.type = 'password';
  }
});
