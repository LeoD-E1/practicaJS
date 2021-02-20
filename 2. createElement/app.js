const lista = document.getElementById('lista')
const li = document.createElement('li')
li.textContent = 'primer Elemento'
lista.appendChild(li)

const arrayElements = ['Segundo Elemento', 'Tercer Elemento', 'Cuarto Elemento']

// arrayElements.forEach(item => {
//   const li = document.createElement('li')
//   li.textContent = item
//   lista.appendChild(li)
// })

// Una forma mas facil de recorrer y añadir a la lista los elementos es con innerHTML
arrayElements.forEach(item => {
  lista.innerHTML += `<li>${item}</li>`
})

/* Existe un problema con estas soluciones dadas, es conveniente usarlas cuando no tenemos
muchos elementos para pintar, ese problema se llama Reflow y es cuando un navegador debe 
procesar parte o la totalidad de la pagina web nuevamente, este error se corrige con los
Fragments*/