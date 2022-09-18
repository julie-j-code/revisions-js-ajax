export default class NewsArticle extends HTMLElement {


    constructor() {
        super()
        const template = document.getElementById("newsarticle")


        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(
                response => response.json()
            )
            .then(
                posts => {
                    for (let post of posts) {
                        // On clone le template pour rappel
                        const clone = document.importNode(template.content, true);
                        const baliseH2 = clone.querySelector("h2");
                        baliseH2.textContent = post.title
                        const baliseP = clone.querySelector("p");
                        baliseP.innerHTML = post.body
                        this.appendChild(clone)
                    }
                }
            )
    }




    connectedCallback() {
        console.log(`coucou je viens d'être rattaché au DOM !`)

    }


}