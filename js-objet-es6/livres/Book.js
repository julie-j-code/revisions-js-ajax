// exemples simples et didactiques
export default class Book {
    static totalBooks = 0
    static allBooks=[]

    constructor(title, pages, notation="") {
        this.title = title
        this.pages = pages
        this.notation = notation;
        this.page = 1
        // faire en sorte qu'à chaque fois qu'un livre est instancié, la quantité de livres se mette à jour ainsi que le tableau des books
        Book.totalBooks+=1;
        Book.allBooks = [{title, pages, notation},...Book.allBooks]
    }

    getPage = () => {
        console.log(this.page);
    }

    nextPage () {
        if (this.page < this.pages) {
            this.page++
            console.log("après incrementation", this.page);
        }
    }

    // on doit pouvoir réinitialiser la page à la fermeture
    close(){
        this.page=1
    }




}