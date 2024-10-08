// books - main div holding all the books.
const books = document.querySelector(".books");

//array of books
const myLibrary = [
  {
    title: "Book1",
    author: "me",
    pages: 500,
    read: true,
  },
  {
    title: "Book2",
    author: "you",
    pages: 200,
    read: false,
  },
];

//helper function to create html elements with text content and classes
function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}

//helper function to create an input checkbox for if book is read w/ event listender
function createReadElement(bookItem, book) {
  let read = document.createElement("div");
  read.setAttribute("class", "book-read");
  read.appendChild(createBookElement("h1", "Read?", "book-read-title"));
  let input = document.createElement("input");
  input.type = "checkbox";
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      bookItem.setAttribute("class", "card book read-checked");
      book.read = true;
      renderAndSave;
    } else {
      bookItem.setAttribute("class", "card book read-unchecked");
      book.read = false;
      renderAndSave();
    }
  });
  if (book.read) {
    input.checked = true;
    bookItem.setAttribute("class", "card book read-checked");
  }
  read.appendChild(input);
  return read;
}

//create the edit icon w/ event listener
function createEditIcon(book) {
  const editIcon = document.createElement("img");
  editIcon.src = "../icons/pencil.svg";
  editIcon.setAttribute("class", "edit-icon");
  editIcon.addEventListener("click", (e) => {
    console.log(book);
  });
  return editIcon;
}

//create dummy icons, they dont do anything
function createIcons() {
  const div = createBookElement("div", null, "icons");
  const icon1 = document.createElement("img");
  icon1.src = "../icons/star-plus-outline.svg";
  const icon2 = document.createElement("img");
  icon2.src = "../icons/eye-plus-outline.svg";
  const icon3 = document.createElement("img");
  icon3.src = "../icons/source-branch.svg";

  div.appendChild(icon1);
  div.appendChild(icon2);
  div.appendChild(icon3);
  return div;
}

//function to create all of the book content on the book dom card
function createBookItem(book, index) {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("id", index);
  bookItem.setAttribute("key", index);
  bookItem.setAttribute("class", "card book");
  bookItem.appendChild(
    createBookElement("h1", `Title: ${book.title}`, "book-title")
  );
  bookItem.appendChild(
    createBookElement("h1", `Author: ${book.author}`, "book-author")
  );
  bookItem.appendChild(
    createBookElement("h1", `Pages: ${book.pages}`, "book-pages")
  );
  bookItem.appendChild(createReadElement(bookItem, book));
  bookItem.appendChild(createBookElement("button", "X", "delete"));
  bookItem.appendChild(createIcons());
  bookItem.appendChild(createEditIcon(book));
  books.insertAdjacentElement("afterbegin", bookItem);
}

//function to all the books
function renderBooks() {
  books.textContent = "";
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

//render of page load
renderBooks();
