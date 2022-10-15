export default class Library {

    books = []
    // on doit pouvoir ajouter un livre
    addBook(book) {
        this.books = [book, ...this.books]
    }

    // on doit  pouvoir ajouter plusieurs livres
    addBooks(newBooks) {
        newBooks.forEach(book => {
            this.books = [book, ...this.books]

        });

    }

    // on doit pouvoir retrouver un livre pas lettre
    findBookByLetters(letter) {
        // to do

    }


}