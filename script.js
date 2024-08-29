let myLibrary = [];

const addBookBtn = document.getElementById("addBook");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");
const bookTitle = document.getElementById("book_title");
const authorName = document.getElementById("author_name");
const numPages = document.getElementById("num_pages");
const finished = document.getElementById("finished");
const library = document.querySelector(".library"); // section container holding the cards

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

cancelBtn.addEventListener("click", () => {
  modal.close();
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const form = document.querySelector(".form");
form.onsubmit = function (event) {
  event.preventDefault();
};

submitBtn.addEventListener("click", () => {
  const titleValue = bookTitle.value;
  const authorValue = authorName.value;
  const pagesValue = numPages.value;
  const finishedValue = finished.checked; // Stores the checked status as a boolean

  addBookToLibrary(titleValue, authorValue, pagesValue, finishedValue);
  bookTitle.value = "";
  authorName.value = "";
  numPages.value = "";
  finished.checked = false;

  modal.close();
  createCards();
  console.log(myLibrary);
});

function createCards() {
  library.innerHTML = "";
  myLibrary.forEach((book, index) => {
    // Create the card element
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    library.appendChild(bookCard);

    // Create and append the title element
    const createTitle = document.createElement("div");
    createTitle.classList.add("book-title");
    createTitle.textContent = book.title; // Add the book title
    bookCard.appendChild(createTitle);

    // Create and append the author element
    const createAuthor = document.createElement("div");
    createAuthor.classList.add("author");
    createAuthor.textContent = `Author: ${book.author}`; // Add the author's name
    bookCard.appendChild(createAuthor);

    // Create and append the pages element
    const createPages = document.createElement("div");
    createPages.classList.add("num-pages");
    createPages.textContent = `Pages: ${book.pages}`; // Add the number of pages
    bookCard.appendChild(createPages);

    // Create and append the buttons container
    const createButtonDiv = document.createElement("div");
    createButtonDiv.classList.add("btns");
    bookCard.appendChild(createButtonDiv);

    // Create and append the remove button
    const createRemove = document.createElement("button");
    createRemove.classList.add("remove");
    createRemove.textContent = "Remove from Library";
    createButtonDiv.appendChild(createRemove);

    // Create and append the read button
    const createRead = document.createElement("button");
    createRead.classList.add("read");
    createRead.textContent = book.read ? "Finished" : "Unfinished"; // Show whether the book has been read
    createButtonDiv.appendChild(createRead);

    // Add event listener to remove the book from the library
    createRemove.addEventListener("click", () => {
      myLibrary.splice(index, 1); // Remove book from array
      createCards(); // Re-render the cards
    });

    // Add event listener to toggle the read status
    createRead.addEventListener("click", () => {
      book.read = !book.read; // Toggle the read status
      createCards(); // Re-render the cards
    });
  });
}
