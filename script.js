let myLibrary = [];

const addBookBtn = document.getElementById("addBook");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel")
const bookTitle = document.getElementById("book_title");
const authorName = document.getElementById("author_name");
const numPages = document.getElementById("num_pages");
const finished = document.getElementById("finished");

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});



/*
// object constructor:
function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}
// how do I get this object into the library array?
// how does it know  title is book-title on the card, and author is

// clicking on the ADD BOOK button needs to 1. show a modal 2. let the user type in title, author and pages 3. let the user select whether the book is finished or not 4. Let user either cancel or submit the info to myLibrary

document.getElementById("submit").onclick = function addBookToLibrary() {
  return myLibrary.push().value;
};

addBookToLibrary([{ title: "The Bible" }, { author: "God" }, { pages: 500 }]);

console.log(myLibrary); */
