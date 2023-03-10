
function hiddenInput() {
  const input = document.getElementById('inputContent')
  input.style.display = 'none'
}

function showInput() {
  const input = document.getElementById('inputContent')
  input.style.display = 'flex'
}

const containerCards = document.querySelectorAll('.container-cards')
const fazer = document.getElementById('fazer')
const fazendo = document.getElementById('fazendo')
const feito = document.getElementById('feito')

const novaTarefa = document.createElement('div')
novaTarefa.setAttribute('class', 'nova-tarefa')
novaTarefa.innerHTML = '+ CRIAR NOVO ITEM'

//criando copias da div de cração
const nova1 = novaTarefa.cloneNode(true)
containerCards[0].appendChild(nova1)

const nova2 = novaTarefa.cloneNode(true)
containerCards[1].appendChild(nova2)

const nova3 = novaTarefa.cloneNode(true)
containerCards[2].appendChild(nova3)

let identificador = 0

//chamando a criação de nova tarefa
nova1.addEventListener('click', () => {
  showInput()
  identificador = 1
})

nova2.addEventListener('click', () => {
  showInput()
  identificador = 2
})

nova3.addEventListener('click', () => {
  showInput()
  identificador = 3
})

//arrays para tarefas
const tarefasFazer = []
const tarefasFazendo = []
const tarefasFeitas = []

//função responsavel por criar uma nova tarefa
function addTarefa() {
  const input = document.getElementById('input')
  var valorInput = input.value;

  if (identificador == 1) {
    tarefasFazer.push({ id: tarefasFazer.length + 1, tarefa: valorInput })
    fazer.innerHTML = "";
    for (var i = 0; i < tarefasFazer.length; i++) {
      var objetoAtual = tarefasFazer[i];
      var novoItem = document.createElement("div");
      novoItem.setAttribute('id', 'container-tarefa')
      novoItem.innerHTML = objetoAtual.tarefa;
      fazer.appendChild(novoItem);
      fazer.appendChild(nova1)
    }
    hiddenInput()
  } else if (identificador == 2) {
    tarefasFazendo.push({ id: tarefasFazendo.length + 1, tarefa: valorInput })
    fazendo.innerHTML = "";
    for (var i = 0; i < tarefasFazendo.length; i++) {
      var objetoAtual = tarefasFazendo[i];
      var novoItem = document.createElement("div");
      novoItem.setAttribute('id', 'container-tarefa')
      novoItem.innerHTML = objetoAtual.tarefa;
      fazendo.appendChild(novoItem);
      fazendo.appendChild(nova2)
    }
    hiddenInput()
  } else if (identificador == 3) {
    tarefasFeitas.push({ id: tarefasFeitas.length + 1, tarefa: valorInput })
    feito.innerHTML = "";
    for (var i = 0; i < tarefasFeitas.length; i++) {
      var objetoAtual = tarefasFeitas[i];
      var novoItem = document.createElement("div");
      novoItem.setAttribute('id', 'container-tarefa')
      novoItem.innerHTML = objetoAtual.tarefa;
      feito.appendChild(novoItem);
      feito.appendChild(nova3)
    }
    hiddenInput()

  }

  input.value = ''
}

//logicas de alteração da posição de tarefas
function ReposicionarTarefaFazer(item) {
  const objetoParaMover = tarefasFazer.splice(item, item)[0];
  tarefasFazer.unshift(objetoParaMover);
}

function ReposicionarTarefaFazendo(item) {
  const objetoParaMover = tarefasFazendo.splice(item, item)[0];
  tarefasFazendo.unshift(objetoParaMover);
}

function ReposicionarTarefaFeita(item) {
  const objetoParaMover = tarefasFeitas.splice(item, item)[0];
  tarefasFeitas.unshift(objetoParaMover);
}

// const meuArray = [
//   { id: 1, nome: 'Objeto 1' },
//   { id: 2, nome: 'Objeto 2' },
//   { id: 3, nome: 'Objeto 3' },
//   { id: 4, nome: 'Objeto 4' },
//   { id: 5, nome: 'Objeto 5' },
//   { id: 6, nome: 'Objeto 6' }
// ];

//função responsavel por excluir uma tarefa
// function excluirTarefa(array, param) {
//   const filter = array.filter(e => e.id != param)
//   meuArray;
//   meuArray.push(filter)
//   console.log(filter)
// }



// excluirTarefa(meuArray, 2)