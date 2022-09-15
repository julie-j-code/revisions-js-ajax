class SecondTimer extends HTMLElement{
constructor(){
    super()
    
    this.i=0
    this.span = document.createElement('span')
    this.span.classList.add('badge')
    this.span.classList.add('bg-secondary')
    this.span.innerHTML = this.i
    // et on grefffe le tout sur  ce dont s'agit, c'est à dire le customElement qui va être crée
    this.appendChild(this.span)
    // fonction compteur
    window.setInterval(()=>{
        this.i++
        // et ne pas oublié de recharger, classiquement le innerHTML après chaque incrémentation
        this.span.innerHTML=this.i
    },1000)
}

}

// pour l'instancier en quelque sorte, on le définit comme instace de la classe identifié comme élément second-timer :
customElements.define('second-timer', SecondTimer );

