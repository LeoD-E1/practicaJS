const lista = document.getElementById('lista')

const arrayElements = ['item1', 'item2', 'item3']

const templateContent = document.querySelector('#template').content
const fragment = document.createDocumentFragment()

arrayElements.forEach(item => {
  templateContent.querySelector('.text-danger').textContent = item
  const clone = templateContent.cloneNode(true)
  fragment.appendChild(clone)
})

lista.appendChild(fragment)
// const fragment = document.createDocumentFragment()
// arrayElements.forEach(item => {
//     const li = document.createElement('li')
//     li.classList.add('list')
//     const b = document.createElement('b')
//     b.textContent = 'Nombre: '
//     const span = document.createElement('span')
//     span.textContent = item

//     li.appendChild(b)
//     li.appendChild(span)
//     fragment.appendChild(li)
// })

// lista.appendChild(fragment)

// let fragment = ''
// arrayElements.forEach(item => {
//   fragment +=
//       `<li class="list">
//         <b>Nombre: </b> <span class="text-danger">${item}</span>
//       </li>`
// })

// lista.innerHTML = fragment