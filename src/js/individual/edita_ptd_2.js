import { listaDisciplinas } from './lista.js';

// Funcionalidade das abas do layout

function abrirAba(target, cont) {
  let sibs = Array.from(target.parentElement.children);
  let targetId = 0;
  for (let sib in sibs) {
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

// Opções de escolha de disciplina

function selecionarModalidade() {
  modalidade = modalidadeSelect.value;
  let cursosHTML = '';
  if (modalidade === 'Integrado') cursosHTML = cursosIntegrado;
  else if (modalidade === 'Subsequente') cursosHTML = cursosSubsequente;
  else cursosHTML = cursosSuperior;
  cursoSelect.innerHTML = cursosHTML;
}

function selecionarCurso() {
  curso = cursoSelect.value;
  let auxList = [];
  for (let disciplina of disciplinas) {
    if (disciplina.substr(0, disciplina.indexOf('-')).includes(curso)) {
      if (disciplina.includes(modalidade) || modalidade === 'Superior')
        auxList.push(disciplina.substr(0, disciplina.indexOf('>') + 1) + disciplina.substr(disciplina.indexOf('->') + 3));
    }
  }
  disciplinaSelect.innerHTML = auxList.join('');
}

const modalidadeSelect = document.getElementById('modalidade');
const cursoSelect = document.getElementById('curso');
const disciplinaSelect = document.getElementById('disciplina');
const turmaSelect = document.getElementById('turma');
const cursosIntegrado = `
<option value="Automação Industrial">Automação Industrial</option>
<option value="Eletrotécnica">Eletrotécnica</option>
<option value="Fabricação Mecânica">Fabricação Mecânica</option>
<option value="Geoprocessamento">Geoprocessamento</option>
<option value="Informática para Internet">Informática para Internet</option>
<option value="Refrigeração e Climatização">Refrigeração e Climatização</option>
`;
const cursosSubsequente = `
<option value="Automação Industrial">Automação Industrial</option>
<option value="Eletrotécnica">Eletrotécnica</option>
<option value="Fabricação Mecânica">Fabricação Mecânica</option>
<option value="Geoprocessamento">Geoprocessamento</option>
<option value="Refrigeração e Climatização">Refrigeração e Climatização</option>
`;
const cursosSuperior = `
<option value="Enfermagem">Enfermagem</option>
<option value="Engenharia Mecânica">Engenharia Mecânica</option>
<option value="Tecnologia em Análise e Desenvolvimento de Sistemas">Tecnologia em Análise e Desenvolvimento de Sistemas</option>
<option value="Tecnologia em Construção de Edifícios">Tecnologia em Construção de Edifícios</option>
`;
let disciplinas = listaDisciplinas.split('\n');
disciplinas.shift();
let modalidade = 'Integrado'
let curso = 'Automação Industrial';

modalidadeSelect.addEventListener('click', selecionarModalidade);
cursoSelect.addEventListener('click', selecionarCurso);

// Geral

document.addEventListener('DOMContentLoaded', () => {
  abrirAba(initial, content)
  selecionarModalidade();
  selecionarCurso();
});
document.removeEventListener('DOMContentLoaded', () => {
  abrirAba(initial, content)
  selecionarModalidade();
  selecionarCurso();
});
