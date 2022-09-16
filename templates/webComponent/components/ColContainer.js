
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



