
// Create default/placeholder library data in case there is none in localStorage 
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
  }
];

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
      
        createList();
    
        document.querySelector("#name").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#pages").value = '';
    
        return;
      }
    
      return alert('Form cannot be blank');
    }



// // Iterate through myLibrary array to display book objects
let createList = () => {
  let elem = "<ul>";
  myLibrary.forEach( (item, index) => {

    for (let key in item) {
      if (key != "read") {
        elem += `<li>${item[key]}</li>`; 
      }
    }

    let bookState = "";
    if (myLibrary[index].read == "Unread") {
      bookState = "unread"; 
    } else { 
      bookState = "read";
    }
    
    elem += "<button class='updateRead " + bookState + "' value='" + index + "'>" + myLibrary[index].read + "</button>";
    elem += "<button class='delete' value='" + index + "'>Delete</button></ul><ul>";
  })
  const page = document.querySelector(".bookList");
  page.innerHTML = elem;

  // Delete book object from array
  document.querySelectorAll(".delete").forEach(function(item) {

    item.addEventListener("click", () => {

      const index = item.value;
    
      myLibrary.splice(index, 1);
      createList();
  
    });
  });
  // Update read status of book object in array
  document.querySelectorAll(".updateRead").forEach(function(item) {

    item.addEventListener("click", function() {

      const index = item.value;

      if (myLibrary[index].read === "Read") {
        myLibrary[index].read = "Unread";
        createList();

      } else if (myLibrary[index].read === "Unread") {
        myLibrary[index].read = "Read";
        createList();
      }
    });
  });
}
 
createList();


  