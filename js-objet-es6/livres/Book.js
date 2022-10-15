// exemples simples et didactiques
export default class Book {
    static totalBooks = 0
    constructor(title, pages, notation="") {
        this.title = title
        this.pages = pages
        this.notation = notation;
        this.page = 1
        // faire en sorte qu'à chaque fois qu'un livre est instancié, la quantité de livres se mette à jour... 
        Book.totalBooks+=1;
    }

    // on doit pouvoir récupérer la  page sur laquelle on est actuellement. Par défaut, un livre commence à la page 1
    getPage = () => {
        console.log(this.page);
    }

    // on doit pouvoir tourner la page  pour se rendre à la page suivante
    nextPage () {
        // console.log(localStorage.getItem("ma page"))
        if (this.page < this.pages) {
            this.page++
            // localStorage.setItem("ma page", JSON.stringify(this.page))
            console.log("après incrementation", this.page);
        }
    }

    // on doit pouvoir réinitialiser la page à la fermeture
    close(){
        this.page=1
    }




}