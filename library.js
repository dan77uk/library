///// Copyright footer /////
let date = new Date().getFullYear();
document.querySelector(".date").textContent = date;


// Default Library Data
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

// // Retrieve the myLibrary array from localStorage and set to default data if no items in localStorage
const library = JSON.parse(localStorage.getItem('myLibrary'));
if (library.length === 0) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

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
    document.querySelector("#name").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    return;
  }
  return alert('Please dont fuck around');
}

//Iterate through retrieved library array from local storage and create HTML unordered list
const createList = () => {
  let elem = "<ul>";
  library.forEach( (book, index) => {

    for (let key in book) {
      if (key != "read") {
        elem += `<li>${book[key]}</li>`; 
      }
    }

    let bookState = "";
    if (library[index].read == "Unread") {
      bookState = "unread"; 
    } else { 
      bookState = "read";
    }
    console.log(bookState);
    
    elem += "<button class='updateRead " + bookState + "' value='" + index + "'>" + library[index].read + "</button>";
    elem += "<button class='delete' value='" + index + "'>Delete</button></ul><ul>";
  })
  const page = document.querySelector(".bookList");
  page.innerHTML = elem;
}

createList();

// Delete book object from array
  document.querySelectorAll(".delete").forEach(function(item) {

    item.addEventListener("click", function() {

      const index = item.value;
      console.log(library[index]);
      library.splice(index, 1);
      localStorage.setItem("myLibrary", JSON.stringify(library));
      window.location.reload();
    });
  });




// Update read status of book object in array
  document.querySelectorAll(".updateRead").forEach(function(item) {

    item.addEventListener("click", function() {

      const index = item.value;

      if (library[index].read === "Read") {
        library[index].read = "Unread";
        localStorage.setItem("myLibrary", JSON.stringify(library));
        window.location.reload();

      } else if (library[index].read === "Unread") {
        library[index].read = "Read";
        localStorage.setItem("myLibrary", JSON.stringify(library));
        window.location.reload();
  
      }
    });
  });

