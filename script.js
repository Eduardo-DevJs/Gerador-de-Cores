const form = document.querySelector('#form')
const corHex = document.querySelector('[data-cor]')

function mostrarHexadecimal(e){
  const target = e.target.value
  corHex.innerText = target
}

function copiarCor(){
  navigator.clipboard.writeText(corHex.innerText)
}

form.addEventListener('change', mostrarHexadecimal)
corHex.addEventListener('click', copiarCor)