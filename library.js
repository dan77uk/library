///// Copyright footer /////
let date = new Date().getFullYear();
document.querySelector(".date").textContent = date;

let myLibrary = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: "245",
    read: true
  },
  {
    name: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: false
  }
];




function addBookToLibrary() {

}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function newBook() {
  const name = document.querySelector("#name").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;

  const newAdd = new Book(name, author, pages, status);
  console.log(newAdd);

  const retrievedObject = localStorage.getItem('myLibrary');
  const library = JSON.parse(retrievedObject);
  library.push(newAdd);
  localStorage.setItem('myLibrary', JSON.stringify(library));
  return createList();
}



// Put the object into storage
localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

// Retrieve the object from storage
const retrievedObject = localStorage.getItem('myLibrary');
const library = JSON.parse(retrievedObject);

console.log(library);







// Iterate through retrieved library array from local storage and create HTML unordered list
const createList = () => {
  
    let elem = "<ul>";
  
    library.forEach(book => {
      for (let key in book) {
        elem += `<li>${book[key]}</li>`; 
      }
      elem +="</ul><ul>"
    })
    const page = document.querySelector(".bookList");
    page.innerHTML = elem;
  
  }
  
  createList();
  