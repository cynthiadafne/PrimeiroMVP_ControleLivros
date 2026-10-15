export default class BookRepository {

    getAll() {
        return JSON.parse(
            localStorage.getItem("books")
        ) || [];
    }

    saveAll(books) {
        localStorage.setItem(
            "books",
            JSON.stringify(books)
        );
    }

    create(book) {

        const books = this.getAll();

        books.push(book);

        this.saveAll(books);

        return book;
    }

    delete(id) {

        const books = this.getAll()
            .filter(b => b.id !== id);

        this.saveAll(books);
    }
}