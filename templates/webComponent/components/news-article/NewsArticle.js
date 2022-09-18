
export default class NewsArticle extends HTMLElement {

    constructor() {
        super()
        // On récupère le template souhaité finalement la seule alternative aux backsticks (mais c'est selon moi totalement exclu de recourir à <template>
        const template = document.getElementById("newsarticle")
        // On clone le template pour rappel
        const clone = document.importNode(template.content, true);
        // on se crée des getter
        this.baliseH1 = clone.querySelectorAll("h1");
        this.baliseH2 = clone.querySelectorAll("h2");
        this.baliseP = clone.querySelector("p");


        this.appendChild(clone)

    }

    connectedCallback() {
        console.log("coucou")
        console.log(this)
        console.log(this.baliseH1);
        console.log(this.baliseH2);
        console.log(this.baliseP);
        // ça marche très bien. ça fait penser au OnInit() d'Angular
        for(let h2 of this.baliseH2){h2.textContent=`C'est moi là encore qui décide `}
        for(let h1 of this.baliseH1){h1.textContent=`C'est moi qui décide `}
    }

}






