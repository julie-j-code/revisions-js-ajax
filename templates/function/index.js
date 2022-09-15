import { loadTemplate } from "./myComponent/template.js";

// const showTemplate = (x,y) => {
//     const myTemp = document.getElementById(y);
//     const elementFromTemplate = myTemp.outerHTML.replaceAll("template", "div");
//     const myElement = document.querySelectorAll(x)[0];
//     console.log("myElement", myElement);
//     myElement.innerHTML = elementFromTemplate;
// }

loadTemplate();


customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();
            // c'est ici, qu'on pourrait construire un template dynamiquement pour l'injecter.
            // il ne sert ici qu'à créer un element HTML personnalisé
        }
    })






