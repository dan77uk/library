// Create default/placeholder library data 
let myLibrary = [
  {
    id: generateId(),
    title: "React Quickly, 2nd Ed.",
    author: "Morten Barklund & Azat Marden",
    pages: "575",
    read: "Read",
    buy: "https://www.manning.com/books/react-quickly-second-edition?query=react"
  },
  {
    id: generateId(),
    title: "The Joy of Javascript",
    author: "Luis Atencio",
    pages: "612",
    read: "Unread",
    buy: "https://www.manning.com/books/the-joy-of-javascript?query=the%20joy"
  },
  {
    id: generateId(),
    title: "The Art of Unit Testing",
    author: "Roy Osherove",
    pages: "325",
    read: "Read",
    buy: "https://www.manning.com/books/the-art-of-unit-testing-third-edition?query=the%20art"
  },
  {
    id: generateId(),
    title: "ASP.NET Core Security",
    author: "Christian Wenz",
    pages: "368",
    read: "Unread",
    buy: "https://www.manning.com/books/asp-net-core-security?query=asp"
  },
  {
    id: generateId(),
    title: "TypeScript Quickly",
    author: "Yakov Fain & Anoton Moiseev",
    pages: "488",
    read: "Unread",
    buy: "https://www.manning.com/books/typescript-quickly?query=type"
  }
]

createList()
class bookClass {
  constructor(title, author, pages, read) {
    this.id = generateId()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}    

function newBook() {
  const name = document.querySelector("#name").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const status = document.querySelector("#status").value
    
  if (name !== '' && author !== '' && pages !== '') {
    const newAddition = new bookClass(name, author, pages, status); // create new object from user input
    myLibrary.push(newAddition)
    modal.style.display = 'none'
    createList()
    document.querySelector("#name").value = ''
    document.querySelector("#author").value = ''
    document.querySelector("#pages").value = ''
    return
  }
  return alert('Form cannot be blank')
}

function generateId() {
  return Math.random() * 10000
}

function createList() {
  
  const bookListWrapper = document.getElementById('bookList')
  bookListWrapper.innerHTML = ''
  
  myLibrary.forEach(book => {
    const container = document.createElement('div')
    container.className = 'bookCard'

    const title = document.createElement('h2')
    title.innerText = book.title

    const author = document.createElement('h3')
    author.innerText = `Written by ${book.author}`

    const pages = document.createElement('p')
    pages.innerText = `${book.pages} pages`
    
    const readButton = document.createElement('button')
    const status = readStatus(`${book.read}`)
    let buttonText
    if (status === 'Read') {
      buttonText = 'Mark as unread'
    } else {
      buttonText = 'Mark as read'
    }
    readButton.type = 'submit'
    readButton.className = status.toLowerCase()
    readButton.id = book.id
    readButton.innerText = buttonText
    readButton.addEventListener('click', updateReadStatus)


    const deleteButton = document.createElement('button')
    deleteButton.type = 'submit'
    deleteButton.id = book.id
    deleteButton.className = 'deleteBook'
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', deleteBook)

    const buttonContainer = document.createElement('div')
    buttonContainer.append(readButton, deleteButton)

    container.append(title, author, pages, buttonContainer)
    bookListWrapper.append(container)

  })
}

function readStatus(arg) {
  if (arg === 'Read') {
    return 'Read'
  } else {
    return 'Unread'
  }
}

function updateReadStatus(event) {
  const index = myLibrary.findIndex(object => object.id === Number(event.target.id) )
  if (myLibrary[index].read === 'Read') {
    myLibrary[index].read = 'Unread'
  } else {
    myLibrary[index].read = 'Read'
  }
  return createList()
}

function deleteBook(event) {
  const index = myLibrary.findIndex(object => object.id === Number(event.target.id) )
  myLibrary.splice(index, 1)
  createList()
}

// Modal 
const modal = document.getElementById('modal')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')

// Open and close modal 
openModal.onclick = function() { modal.style.display = 'block' }
closeModal.onclick = function() { modal.style.display = 'none' }