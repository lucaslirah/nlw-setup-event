const form = document.querySelector("#form-habits")//aqui é o mesmo seletor do css
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) 
form.addEventListener("change", save)//tudo sendo registrado em memória

function add() {
  
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso")
    return
  }
  alert('Adicionado')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //sinal do ou ||

nlwSetup.setData(data)
nlwSetup.load()