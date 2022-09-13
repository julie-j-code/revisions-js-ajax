// Les modèles fonctionnent mieux avec des composants web. Créons un composant web qui utilise notre modèle comme contenu. Nous l'appellerons <my-paragraph> :

customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('my-paragraph');
            let templateContent = template.content;
            document.body.appendChild(templateContent.cloneNode(true));
        }
    })

// Le point important à noter est que l'on ajoute un clone du contenu du modèle à la racine du DOM, créé à l'aide de la méthode Node.cloneNode().