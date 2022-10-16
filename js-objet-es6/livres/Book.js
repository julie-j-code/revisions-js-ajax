// exemples simples et didactiques
export default class Book {
    static totalBooks = 0
    static allBooks = []

    constructor(title, pages, notation = "") {
        this.title = title
        this.pages = pages
        this.notation = notation;
        this.page = 1
        // faire en sorte qu'à chaque fois qu'un livre est instancié, la quantité de livres se mette à jour ainsi que le tableau des books
        Book.totalBooks += 1;
        Book.allBooks = [{ title, pages, notation }, ...Book.allBooks]
    }

    getPage = () => {
        console.log(this.page);
    }

    nextPage() {
        if (this.page < this.pages) {
            this.page++
            console.log("après incrementation", this.page);
        }
    }

    // on doit pouvoir réinitialiser la page à la fermeture
    close() {
        this.page = 1
    }

    static findByWord(txt) {
        txt=txt.toLowerCase()
        const result = Book.allBooks.filter(b => b.title.toLowerCase().includes(txt))
        console.log("Résultat de recherche", result);
        return result;
    }

    static evaluate(bookId, note) {
        if (bookId && bookId > 0 && note != null) {
            console.log("Evaluation ok");
            console.log(Book.allBooks[bookId]);
            Book.allBooks[bookId].notation = note
        }
    }



}