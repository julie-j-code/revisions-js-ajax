
// All together : on réunit les 3 le Custom Element, le template et le Shadow Dom

const template=document.createElement('template')
template.innerHTML=`
<p class="bg-success text-white">The component Works ! And it works :)</p>
`
export default class NewsArticle extends HTMLElement {
    constructor(){
        super() 
        // ici, puisque la méthode attachShadow se trouve dans le constructeur et c'est le Custom Element qui devient élément racine du Shadow Dom.
        this.attachShadow({mode : 'open'})
        // le problème, c'est que template est tellement dans l'ombre, qu'il est imperméable au style qui se charge pour la page !!! Plus de Bootstrap donc. Vive angular ! Faudrait profiter du Shadow Dom pour que le style additionnel n'affecte  pas le reste du document, mais faire que les feuilles de style restent actives (par défaut)
        this.shadowRoot.appendChild(template.content.cloneNode (true))        
    }
}



