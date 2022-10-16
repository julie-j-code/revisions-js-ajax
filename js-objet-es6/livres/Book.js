import { Service } from "./Service.js";

// exemples simples et didactiques
export default class Book {
    static totalBooks = 0
    // static allBooks = []
    // pas besoin d'instancier le service
    static allBooks = Service.data

    constructor(title, pages, notation = "") {
        console.log(Book.allBooks);
        this.title = title
        this.pages = pages
        this.notation = notation;
        this.page = 1
        // faire en sorte qu'à chaque fois qu'un livre est instancié, la quantité de livres se mette à jour ainsi que le tableau des books
        Book.totalBooks += 1;
        Book.allBooks = [{ title, pages, notation }, ...Book.allBooks]
        // faire en sorte que l'enregistrement ne se fasse que si il n'y a pas de doublons
        Book.checkEntries(this.title, Book.allBooks)
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

    close() {
        this.page = 1
    }

    static checkEntries(title, array) {
        for (let item of array) {
            if (Object.values(item).includes(title)) {
                console.log("Déjà en bibliothèque")
            }
            else {
                console.log("c'est bon : enregistrement effecuté")
                localStorage.setItem("Library", JSON.stringify(array))
            }
        }
    }

    static findByWord(txt) {
        txt = txt.toLowerCase()
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