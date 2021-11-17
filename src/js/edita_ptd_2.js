function abrirAba(target, cont) {
  let sibs = Array.from(target.parentElement.children);
  let targetId = 0;
  for (let sib in sibs) {
    console.log(sib)
    if (sibs[sib].value !== target.value) {
      sibs[sib].classList.remove('active');
      cont[sib].style.display = 'none';
    } else targetId = sib;
  }
  target.classList.add('active');
  cont[targetId].style.display = 'block';
}

const tabs = document.getElementById('tabs');
const content = document.getElementsByClassName('tabcontent');
const initial = document.getElementsByClassName('tabhead')[0];
tabs.addEventListener('click', e => abrirAba(e.target, content));
document.addEventListener('DOMContentLoaded', () => abrirAba(initial, content));
document.removeEventListener('DOMContentLoaded', () => abrirAba(initial, content));
