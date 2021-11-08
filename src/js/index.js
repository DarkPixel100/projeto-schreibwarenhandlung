let senha = document.getElementById("senha");
let olho = document.getElementById("mostrar");
senha.submit;
olho.addEventListener('click', () => {
  if (senha.type === 'password') {
    senha.type = 'text';
    olho.children[0].classList.add('fa-eye');
    olho.children[0].classList.remove('fa-eye-slash');
  } else {
    olho.children[0].classList.add('fa-eye-slash');
    olho.children[0].classList.remove('fa-eye');
    senha.type = 'password';
  }
});
