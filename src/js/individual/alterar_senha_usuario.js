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

const senha1 = document.getElementById('senha1');
const senha2 = document.getElementById('senha2');
const tamanhoSenha = document.getElementById('tamanhoSenha');
const senhaIgual = document.getElementById('senhaIgual');

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
