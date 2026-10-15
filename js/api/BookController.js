import BookService
from "../services/BookService.js";

import RecommendationService
from "../services/RecommendationService.js";

const service =
    new BookService();

const ai =
    new RecommendationService();

export function addBook() {

    const title =
        document.getElementById(
            "title"
        ).value;

    const author =
        document.getElementById(
            "author"
        ).value;

    service.create(
        title,
        author
    );

    renderBooks();
}

export function renderBooks(){

    const books =
        service.getAll();

    const tbody =
        document.getElementById(
            "books"
        );

    tbody.innerHTML = "";

    books.forEach(book => {

        tbody.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>

            <td>

                <button onclick="toggleStatus(${book.id})">
                Alterar
                </button>

                <button onclick="removeBook(${book.id})">
                Excluir
                </button>

            </td>
        </tr>
        `;
    });
}