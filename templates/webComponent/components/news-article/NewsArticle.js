
export default class NewsArticle extends HTMLElement {

    constructor() {
        super()

        // le chemin est relatif à l'endroit où le fragment sera injecté
        let file = "./components/news-article/news-article.html"

        fetch(file)
            .then(x => x.text())
            .then(y => {
                this.attachShadow({ mode: 'open' })
                this.shadowRoot.innerHTML = y
            }); 

    }

}






