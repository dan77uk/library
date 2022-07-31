// Create default/placeholder library data 
let myLibrary = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: "245",
    read: "Read"
  },
  {
    title: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: "Unread"
  },
  {
    title: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: "Unread"
  },
  {
    title: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: "Unread"
  },
  {
    title: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: "Unread"
  }
]
class bookClass {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}    

  function newBook() {
      const name = document.querySelector("#name").value;
      const author = document.querySelector("#author").value;
      const pages = document.querySelector("#pages").value;
      const status = document.querySelector("#status").value;
    
      if (name != '' && author != '' && pages != '') {
    
        const newAddition = new bookClass(name, author, pages, status); // create new object from user input
  
        myLibrary.push(newAddition);
        modal.style.display = 'none'
        const bookListWrapper = document.getElementById('bookList')
        bookListWrapper.innerHTML = ''
        createList();
    
        document.querySelector("#name").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#pages").value = '';
    
        return;
      }
    
      return alert('Form cannot be blank');
    }

// Iterate through myLibrary array to display book objects
// const createList = () => {
//   let elem = "<ul>";
//   myLibrary.forEach( (item, index) => {

//     for (let key in item) {
//       if (key != "read") {
//         elem += `<li>${item[key]}</li>`; 
//       }
//     }

//     let bookState = "";
//     if (myLibrary[index].read == "Unread") {
//       bookState = "unread"; 
//     } else { 
//       bookState = "read";
//     }
    
//     elem += "<button class='updateRead " + bookState + "' value='" + index + "'>" + myLibrary[index].read + "</button>";
//     elem += "<button class='delete' value='" + index + "'>Delete</button></ul><ul>";
//   })
//   const page = document.querySelector(".bookList");
//   page.innerHTML = elem;

//   // Delete book object from array
//   document.querySelectorAll(".delete").forEach(function(item) {

//     item.addEventListener("click", () => {

//       const index = item.value;
    
//       myLibrary.splice(index, 1);
//       createList();
  
//     });
//   });

//   // Update read status of book object in array
//   document.querySelectorAll(".updateRead").forEach(function(item) {

//     item.addEventListener("click", function() {

//       const index = item.value;

//       if (myLibrary[index].read === "Read") {
//         myLibrary[index].read = "Unread";
//         createList();

//       } else if (myLibrary[index].read === "Unread") {
//         myLibrary[index].read = "Read";
//         createList();
//       }
//     });
//   });
// }

function createList() {
  const bookListWrapper = document.getElementById('bookList')
  
  myLibrary.forEach(book => {
    const container = document.createElement('div')
    container.className = 'bookCard'
    const title = document.createElement('h1')
    title.innerText = book.title
    const author = document.createElement('h3')
    author.innerText = `Written by ${book.author}`
    const pages = document.createElement('p')
    pages.innerText = `${book.pages} pages`
    container.append(title, author, pages)
    bookListWrapper.append(container)
  })
  
}
 
createList();


// Modal 
const modal = document.getElementById('modal')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')

// Open and close modal 
openModal.onclick = function() { modal.style.display = 'block' }
closeModal.onclick = function() { modal.style.display = 'none' }