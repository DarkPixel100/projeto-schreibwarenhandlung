// Funcionalidade das abas do layout

function abrirAba(target, cont) {
  if (target.id !== 'tabs') {
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
}

const tabs = document.getElementById('tabs');
const content = document.getElementsByClassName('tabcontent');
const initial = document.getElementsByClassName('tabhead')[0];
tabs.addEventListener('click', e => abrirAba(e.target, content));

// Opções de escolha de disciplina

import { listaDisciplinas } from './lista.js';

// Funções que trocam as opções dos select's seguintes baseadas na opção escolhida

function selecionarModalidade() {
  modalidade = modalidadeSelect.value;
  let cursosHTML = '';
  if (modalidade === 'Integrado') {
    cursosHTML = cursosIntegrado;
  }
  else if (modalidade === 'Subsequente') cursosHTML = cursosSubsequente;
  else cursosHTML = cursosSuperior;
  cursoSelect.innerHTML = cursosHTML;
  curso = cursoSelect.value;
  turmaSelect.innerHTML = modalidade === 'Integrado' ? turmas[curso] : '<option value=""> </option>';
}

function selecionarCurso() {
  curso = cursoSelect.value;
  let auxList = [];
  for (let disciplina of disciplinas) {
    if (disciplina.substr(0, disciplina.indexOf('-')).includes(curso)) {
      if (disciplina.includes(modalidade) || ['Subsequente', 'Superior'].includes(modalidade))
        auxList.push(disciplina.substr(0, disciplina.indexOf('>') + 1) + disciplina.substr(disciplina.indexOf('->') + 3));
    }
  }
  disciplinaSelect.innerHTML = auxList.join('');
  turmaSelect.innerHTML = modalidade === 'Integrado' ? turmas[curso] : '<option value=""> </option>';
}

// Definindo elementos (select's)

const modalidadeSelect = document.getElementById('modalidade');
const cursoSelect = document.getElementById('curso');
const disciplinaSelect = document.getElementById('disciplina');
const turmaSelect = document.getElementById('turma');

// Definindo lista de elementos para cada modalidade

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

// Lista de turmas para cada curso

const turmas = {
  "Automação Industrial": `
    <option value="1E">1E</option>
    <option value="1E1">1E1</option>
    <option value="2E">2E</option>
    <option value="3E">3E</option>
    <option value="4E">4E</option>
  `,
  "Eletrotécnica": `
    <option value="1A">1A</option>
    <option value="1A1">1A1</option>
    <option value="2A">2A</option>
    <option value="3A">3A</option>
    <option value="4A">4A</option>
  `,
  "Fabricação Mecânica": `
    <option value="1F">1F</option>
    <option value="1F1">1F1</option>
    <option value="2F">2F</option>
    <option value="3F">3F</option>
    <option value="4F">4F</option>
  `,
  "Geoprocessamento": `
    <option value="1D">1D</option>
    <option value="1D1">1D1</option>
    <option value="2D">2D</option>
    <option value="3D">3D</option>
    <option value="4D">4D</option>
  `,
  "Informática para Internet": `
    <option value="1C">1C</option>
    <option value="1C1">1C1</option>
    <option value="2C">2C</option>
    <option value="3C">3C</option>
    <option value="4C">4C</option>
  `,
  "Refrigeração e Climatização": `
    <option value="1B">1B</option>
    <option value="1B1">1B1</option>
    <option value="2B">2B</option>
    <option value="3B">3B</option>
    <option value="4B">4B</option>
  `
}

let disciplinas = listaDisciplinas.split('\n');
disciplinas.shift();
let modalidade = modalidadeSelect.value;
let curso = cursoSelect.value;
// let turma = '1E';

modalidadeSelect.addEventListener('click', selecionarModalidade);
cursoSelect.addEventListener('click', selecionarCurso);

// Input de Carga Horária

function setValorHoras(element) {
  /* Converte 2 inputs de tipo numérico que representam horas e minutos -respectivamente- para
  um único número total de horas, com 2 casas decimais após a vírgula */
  const finalInput = element.parentElement.parentElement.children[0];
  let horasBaseInput = element.parentElement.parentElement.children[1].children[0];
  let minutosBaseInput = element.parentElement.parentElement.children[2].children[0];
  isNaN(parseInt(horasBaseInput.value)) ? horasBaseInput.value = 0 : horasBaseInput;
  isNaN(parseInt(minutosBaseInput.value)) ? minutosBaseInput.value = 0 : minutosBaseInput;
  horasBaseInput.value = Math.min(horasBaseInput.value, 167);
  minutosBaseInput.value = Math.min(minutosBaseInput.value, 59);
  const tempoEmHoras = parseInt(horasBaseInput.value) + parseFloat((minutosBaseInput.value / 60).toFixed(2));
  finalInput.value = tempoEmHoras;
}

const inputsHoras = Array.from(document.getElementsByClassName('horas'));
const inputsMinutos = Array.from(document.getElementsByClassName('minutos'));

// Horários de início e término de atendimentos

function defineHoraAtendimento() { // Converte os dois input's de tipo "time" em dois pares de dígitos (hora e minuto) iniciais e finais, respectivamente
  hInicio.children[0].value = parseInt(hInicio.children[2].value.substr(0,2));
  hInicio.children[1].value = parseInt(hInicio.children[2].value.substr(3,2));
  hTermino.children[0].value = parseInt(hTermino.children[2].value.substr(0,2));
  hTermino.children[1].value = parseInt(hTermino.children[2].value.substr(3,2));
}

const hInicio = document.getElementById('tempoi');
const hTermino = document.getElementById('tempot');

hInicio.addEventListener('click', defineHoraAtendimento);
hInicio.addEventListener('keyup', defineHoraAtendimento);
hTermino.addEventListener('click', defineHoraAtendimento);
hTermino.addEventListener('keyup', defineHoraAtendimento);

// Geral

document.addEventListener('DOMContentLoaded', () => { // Chamando funções que devem ser executadas quando a página carrega
  abrirAba(initial, content)
  selecionarModalidade();
  selecionarCurso();
  defineHoraAtendimento()
  for (let i in inputsHoras) {
    setValorHoras(inputsHoras[i]);
    inputsHoras[i].addEventListener('keyup', (e) => setValorHoras(e.target));
    inputsMinutos[i].addEventListener('keyup', (e) => setValorHoras(e.target));
    inputsHoras[i].addEventListener('click', (e) => setValorHoras(e.target));
    inputsMinutos[i].addEventListener('click', (e) => setValorHoras(e.target));
  }
});
