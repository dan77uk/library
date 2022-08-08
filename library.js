// Create default/placeholder library data 
let books = [
  {
    title: "React Quickly, 2nd Ed.",
    author: "Morten Barklund & Azat Marden",
    pages: "575",
    read: "Unread",
    buy: "https://www.manning.com/books/react-quickly-second-edition?query=react"
  },
  {
    title: "The Joy of Javascript",
    author: "Luis Atencio",
    pages: "612",
    read: "Unread",
    buy: "https://www.manning.com/books/the-joy-of-javascript?query=the%20joy"
  },
  {
    title: "The Art of Unit Testing",
    author: "Roy Osherove",
    pages: "325",
    read: "Unread",
    buy: "https://www.manning.com/books/the-art-of-unit-testing-third-edition?query=the%20art"
  },
  {
    title: "ASP.NET Core Security",
    author: "Christian Wenz",
    pages: "368",
    read: "Unread",
    buy: "https://www.manning.com/books/asp-net-core-security?query=asp"
  },
  {
    title: "TypeScript Quickly",
    author: "Yakov Fain & Anoton Moiseev",
    pages: "488",
    read: "Unread",
    buy: "https://www.manning.com/books/typescript-quickly?query=type"
  }
]

// // Factory function for creating library objects
// const bookFactory = (title, author, pages, read) => {
  
//   const id =  Math.random() * 1

//   const updateRead = () => {
//     const index = mainLibrary.findIndex(object => object.id === id)
//     if (mainLibrary[index].read === 'Read') {
//       mainLibrary[index].read = 'Unread'
//     } else {
//       mainLibrary[index].read = 'Read'
//     }
//     createList()
//   }

//   const deleteBook = () => {
//     const index = mainLibrary.findIndex(object => object.id === id)
//     mainLibrary.splice(index, 1)
//     createList()
//   }

//   return { id, title, author, pages, read, updateRead, deleteBook }
// }

class bookClass {

  constructor(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
    this.id = Math.random() * 1
  }

  deleteBook() {
    const index = mainLibrary.findIndex(object => object.id === Number(this.id))
    mainLibrary.splice(index, 1)
    createList()
  }

}

// Create library and populate using factory function to ensure inital books inherit factory methods
let mainLibrary = []
books.forEach(book => {
  const newBook = new bookClass(book.title, book.author, book.pages, book.read)
  mainLibrary.push(newBook)
})

// Call for creation of library DOM on first load
createList()

// Create new book object on form submit and add to mainLibrary
function newBook() {
  const name = document.querySelector("#name").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const status = document.querySelector("#status").value
    
  if (name !== '' && author !== '' && pages !== '') {

    const newBook = new bookClass(name, author, pages, status)
    mainLibrary.push(newBook)
    modal.style.display = 'none'
    createList()
    document.querySelector("#name").value = ''
    document.querySelector("#author").value = ''
    document.querySelector("#pages").value = ''
    return
  }
  return alert('Form cannot be blank')
}

// Create library DOM
function createList() {
  
  const bookListWrapper = document.getElementById('bookList')
  bookListWrapper.innerHTML = ''
  
  mainLibrary.forEach(book => {
    const container = document.createElement('div')
    container.className = 'bookCard'

    const title = document.createElement('h2')
    title.innerText = book.title

    const author = document.createElement('h3')
    author.innerText = `Written by ${book.author}`

    const pages = document.createElement('p')
    pages.innerText = `${book.pages} pages`
    
    const readButton = document.createElement('button')    
    readButton.type = 'submit'
    readButton.innerText = book.read
    readButton.className = book.read.toLowerCase()
    readButton.id = book.id
    readButton.addEventListener('click', book.updateRead)

    const deleteButton = document.createElement('button')
    deleteButton.type = 'submit'
    deleteButton.id = book.id
    deleteButton.className = 'deleteBook'
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', book.deleteBook)

    const buttonContainer = document.createElement('div')
    buttonContainer.append(readButton, deleteButton)

    container.append(title, author, pages, buttonContainer)
    bookListWrapper.append(container)

  })
}

// Code for managing modal - getting the elements and altering their display on click
const modal = document.getElementById('modal')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')
openModal.onclick = function() { modal.style.display = 'block' }
closeModal.onclick = function() { modal.style.display = 'none' }