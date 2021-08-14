import IMC from '/js/class/imc.js'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    const imcHome = new IMC('.name-imc-home', '.weight-imc-home', '.height-imc-home', '.result')
    imcHome.init()
  })
})
