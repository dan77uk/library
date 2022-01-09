///// Copyright footer /////
let date = new Date().getFullYear();
document.querySelector(".date").textContent = date;


let myLibrary = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: "245",
    read: "Read"
  },
  {
    name: "Javascript & Jquery",
    author: "Jon Duckett",
    pages: "593",
    read: "Unread"
  }
];

function addBookToLibrary(test) {
  const retrievedLibrary = JSON.parse(localStorage.getItem('myLibrary')); // Parse any exisiting JSON stored in myLibrary
  localStorage.setItem("book", JSON.stringify(test));
  retrievedLibrary.push(test);
  localStorage.setItem("myLibrary", JSON.stringify(retrievedLibrary));
  window.location.reload();
}


// Function to create new book object
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
  if (name != '' && author != '' && pages != '') {
    const newAdd = new Book(name, author, pages, status); // create new object from user input
    addBookToLibrary(newAdd) // call function to add new object to library
    return;
  }
  return alert('Please dont fuck around');
}

// Put the object into storage
//localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); 

// // Retrieve the myLibrary array from localStorage
const retrievedObject = JSON.parse(localStorage.getItem('myLibrary'));
console.log(retrievedObject);
const library = retrievedObject;

if (library === null) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  const retrievedObject = localStorage.getItem('myLibrary');
  const library = JSON.parse(retrievedObject);
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
}



//Iterate through retrieved library array from local storage and create HTML unordered list
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
  