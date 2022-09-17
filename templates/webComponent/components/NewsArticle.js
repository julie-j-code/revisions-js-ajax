
// All together : on réunit les 3 le Custom Element, le template et le Shadow Dom

// Dans l'hypothèse abracadabrante où on crée le template depuis le js
// const template=document.createElement('template')
// template.innerHTML=`
// <p class="bg-success text-white">The component Works ! And it works :)</p>
// `

// Dans l'hypothèse où on va se servir d'un fragment de page HTML
const template=document.querySelector('#newsarticle')
// Et c'est toujours là que je me cogne la tête. Puisqu'on ne peut (sauf à charger en ajax un fragment depuis n'importe quelle page) avoir injecter un template externe à la page active !!! 


export default class NewsArticle extends HTMLElement {
    constructor(){
        super() 
        // ici, puisque la méthode attachShadow se trouve dans le constructeur et c'est le Custom Element qui devient élément racine du Shadow Dom.
        this.attachShadow({mode : 'open'})
        // le problème, c'est que template est tellement dans l'ombre, qu'il est imperméable au style qui se charge pour la page !!! Plus de Bootstrap donc. Vive angular ! Faudrait profiter du Shadow Dom pour que le style additionnel n'affecte  pas le reste du document, mais faire que les feuilles de style restent actives (par défaut)
        this.shadowRoot.appendChild(template.content.cloneNode (true))        
    }
}



