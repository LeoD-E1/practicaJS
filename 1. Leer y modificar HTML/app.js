let title = document.querySelector('h1').textContent
console.log(title)

// querySelectorAll selecciona todos los atributos que le pasamos de un mismo tipo
// ya sea de una clase, una etiqueta, etc
console.log(document.querySelectorAll('h1'))
console.log(document.querySelectorAll('.diablo'))

const parrafo = document.getElementById('parrafo')
parrafo.innerHTML = '<b>Parrafo Con innerHTML</b>'

// classList permite añadir clases a un elemnto HTML 
parrafo.classList.add('my-3', 'diablo')