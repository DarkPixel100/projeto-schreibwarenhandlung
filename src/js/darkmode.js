// Troca o esquema de cores da página entre: modo claro e modo escuro

function setMode (mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    button.classList.add('dark');
    button.classList.remove('light');
    button.children[0].style.display = 'none';
    button.children[1].style.display = 'inline-block';
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    button.classList.add('light');
    button.classList.remove('dark');
    button.children[1].style.display = 'none';
    button.children[0].style.display = 'inline-block';
  }
  localStorage.setItem('state', mode);
  return mode;
}

const button= document.getElementById('darkmode');
let state;

if (localStorage.getItem('state'))
state = localStorage.getItem('state');
else
state = 'light';

button.addEventListener('click', () => {
  let current = setMode(state);
  if (current === 'light') state = 'dark';
  else state = 'light'
});

document.addEventListener('DOMContentLoaded', () => setMode(state));
document.removeEventListener('DOMContentLoaded', () => setMode(state));
