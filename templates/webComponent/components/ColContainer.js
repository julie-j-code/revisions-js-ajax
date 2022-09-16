
// Custom Element <col-container>
export default class SecondTimer extends HTMLElement {
    constructor(){
        // super invoque le constructeur du parent
        super()   
        // this.onload=alert('J\'Existe !') 
        this.setAttribute("class","row")  
        const col=document.querySelectorAll('col-container div')
        col.forEach((element)=> element.classList.add("col-6"))
        
    }




    

}

