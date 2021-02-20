/* Los Fragments se utilizan como una version ligera del Documento, viene a solucionar el tema del reflow
En un fragment guardamos un template o nodo de HTML que luego pintaremos en nuestro DOM, Nos permite
Guardar una estructura antes de ser pintada en HTML*/
const lista = document.getElementById('lista')
const arrayElements = ['Primer Elemento','Segundo Elemento', 'Tercer Elemento']

// Crear un  Fragment
const fragment = document.createDocumentFragment()
// const fragment = new DocumentFragment()

arrayElements.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    // fragment.appendChild(li)

    //Insertar con retrazo de 1
    const childNode = fragment.firstChild
    fragment.insertBefore(li, childNode)
})

lista.appendChild(fragment)