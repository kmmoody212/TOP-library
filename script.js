/* const myLibrary = [
  { title: "State of Fear", author: "Michael Crichton", pages: 603 },
  { title: "Wool", author: "Hugh Howey", pages: 592 },
  { title: "None of This is True", author: "Lisa Jewell", pages: 384 },
];

function addBookToLibrary(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function bookFinished() {
  const mark = document.getElementById("toggle");
  const marked = mark.addEventListener("click", function () {
    if (Element.includes("Unfinished")) {
      replace("Unfinished", "Finished");
    } else if (Element.includes("Finished")) {
      replace("Finished", "Unfinished");
    }
  });
}
  */

// User needs to input book title, author, pages, and whether it's finished or not

// all book objects stored in an array:
const myLibrary = [];
const finishedBtn = document.querySelector("#toggle");
const addBookBtn = document.querySelector("#addBook");
// object constructor:
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
// clicking on the ADD BOOK button needs to 1. show a modal 2. let the user type in title, author and pages 3. let the user select whether the book is finished or not 4. Let user either cancel or submit the info to myLibrary
addBookBtn.onclick = () => addBookToLibrary();

function addBookToLibrary() {}
