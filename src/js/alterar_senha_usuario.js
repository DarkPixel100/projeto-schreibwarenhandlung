function verificaTamanho() {
  if (senha1.value !== '' && senha1.value.length < 8) {
    tamanhoSenha.style.opacity = 1;
  } else {
    tamanhoSenha.style.opacity = 0;
  }
}

function verificaIgual() {
  if (senha2.value !== '' && senha1.value !== senha2.value) {
    senhaIgual.style.opacity = 1;
  } else {
    senhaIgual.style.opacity = 0;
  }
}

let senha1 = document.getElementById('senha1');
let senha2 = document.getElementById('senha2');
let tamanhoSenha = document.getElementById('tamanhoSenha');
let senhaIgual = document.getElementById('senhaIgual');

senha1.addEventListener('keyup', () => {
  verificaTamanho()
  if (senha2.value.length !== 0) {
    verificaIgual();
  }
});

senha2.addEventListener('keyup', () => {
  if (senha2.value.length !== 0) {
    verificaIgual();
  }
});
