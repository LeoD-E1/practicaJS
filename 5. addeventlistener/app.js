let contador = 0
const parrafo = document.querySelector('.parrafo')
// const disminuir = document.querySelector('.disminuir')
// const añadir = document.querySelector('.añadir')

// añadir.addEventListener('click', () => { 
//   contador += 1 
//   parrafo.textContent = contador
// })

// disminuir.addEventListener('click', () => { 
//   contador -= 1 
//   parrafo.textContent = contador
// })

// Delegacion de Evento (Event-Delegation) 'e.target'
const selector = document.getElementById('selector')
selector.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-primary')){
    contador++
    parrafo.textContent = contador
  }

  if(e.target.classList.contains('btn-danger')){
    contador--
    parrafo.textContent = contador
  }
  /* Algo que pasa cuando tenemos una parte del sitio escuchando un evento es la propagacion de ese evento.
Para evitar que se propague hay que pararlo, lo hacemos con:*/
e.stopPropagation()
})
