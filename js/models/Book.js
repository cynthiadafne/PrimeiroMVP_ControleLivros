export default class Book {
    constructor(id, title, author, status = "NAO_LIDO") {
        this.id = id;
        this.title = title;
        this.author = author;
        this.status = status;
    }
}