import BookRepository from "../repository/BookRepository.js";

export default class BookService {

    constructor() {
        this.repository = new BookRepository();
    }

    create(title, author) {

        const book = {
            id: Date.now(),
            title,
            author,
            status: "NAO_LIDO"
        };

        return this.repository.create(book);
    }

    getAll() {
        return this.repository.getAll();
    }

    updateStatus(id) {

        const books = this.repository.getAll();

        const book = books.find(
            b => b.id == id
        );

        if(book){

            book.status =
                book.status === "LIDO"
                ? "NAO_LIDO"
                : "LIDO";

            this.repository.saveAll(books);
        }
    }

    delete(id) {
        this.repository.delete(id);
    }
}