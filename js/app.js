import {
    addBook,
    renderBooks
}
from "./api/BookController.js";

window.addBook =
    addBook;

window.onload =
    renderBooks;