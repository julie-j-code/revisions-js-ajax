class SecondTimer extends HTMLElement {
    constructor() {
        super()

        this.i = 0
        this.span = document.createElement('span')
        this.span.classList.add('badge')
        this.span.classList.add('bg-secondary')
        this.span.innerHTML = this.i
        this.additionnalspan = document.createElement('span')
        this.additionnalspan.classList.add('me-2')
        this.additionnalspan.innerHTML = this.getAttribute('myCustomAttribute')

        this.appendChild(this.additionnalspan)
        this.appendChild(this.span)
        // fonction compteur

    }

    // ça, c'est bien. on touche aux cycles de vie des composants, abordé avec Angular et React !!! De cette façon, le setInterval s'execute au moment où le customElement est injecté en tant que fonction de rappel pour le cycle de vie 

    connectedCallback() {
        this.timer = window.setInterval(() => {
            this.i++
            // et ne pas oublié de recharger, classiquement le innerHTML après chaque incrémentation
            this.span.innerHTML = this.i
        }, 1000)

    }

    // de même, on pourra s'assurer en console que le compteur ne continue pas à tourner... 
    disconnectedCallback() {
        window.clearInterval(this.timer)
    }

}

// pour l'instancier en quelque sorte, on le définit comme instace de la classe identifié comme élément second-timer :
customElements.define('second-timer', SecondTimer);

