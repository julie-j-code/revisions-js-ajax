
// Custom Element <col-container>
export default class SecondTimer extends HTMLElement {
    constructor(){
        super()   
        this.setAttribute("class","row")  
        const col=document.querySelectorAll('col-container div')
        col.forEach((element)=> element.classList.add("col-6"))
        
    }
}

// Alternative : notre fragment existant côté html, 
// On va le chercher, indépendamment de tout Custom Element :
const template=document.getElementById("myTemplate")
// On l'injecte dans le DOM du document actif (ici le deuxième div.container)
const destination=document.querySelector("#destination")
destination.appendChild(template.content)
// console.log("destination",destination);
// destination.innerHTML=template.content

// trosième grand pilier : le Shadow Dom
// les éléments qu'on y ajoute (comme des styles par exemple) seront totalement isolés. 
// ils seront insérés à partir de root.

const root= document.querySelector('#root');
console.log(root);
root.attachShadow({mode : "open"})

const text = document.createElement('p')
text.textContent="Je suis issu du shadow pour l'exemple"
// ça me semble très religieusement incorrecte, mais essayons
const style = document.createElement('style')
style.textContent = `p {color : red}`
text.appendChild(style)

// au passage, on notera que append permet d'insérer plusieurs éléments d'un coup
root.shadowRoot.append(text,style)






