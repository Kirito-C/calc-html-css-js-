const schermo = document.getElementById('schermo')

function Scrivi(input) {
  schermo.value += input
}

function Pulisci() {
  schermo.value = ""
}

function Calc() {
  try{
    schermo.value = eval(schermo.value)
  }

  catch (error) {
    schermo.value = "errore"
  }
}
