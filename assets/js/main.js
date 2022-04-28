const form = document.querySelector('.formulario')

function prevent(event) {
  event.preventDefault()
  const inputPeso = event.target.querySelector('#peso')
  const inputAltura = event.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if(!peso) {
    setResult('Peso inválido', false)
    return
  }
  
  if(!altura) {
    setResult('Altura inválido', false)
    return
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)
  const msg = `Seu IMC é ${imc} (${nivelImc}).`
  setResult(msg, true)
}

form.addEventListener('submit', prevent)

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

  if(imc >= 39.9) return nivel[5]
  if(imc >= 34.9) return nivel[4]
  if(imc >= 29.9) return nivel[3]
  if(imc >= 24.9) return nivel[2]
  if(imc >= 18.5) return nivel[1]
  if(imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
  return Number((peso / altura ** 2).toFixed(2))
}

function createP() {
  const p = document.createElement('p')
  return p
}

function setResult(msg, isValid) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = ''
  const p = createP()
  
  if(isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg
  resultado.appendChild(p)
}