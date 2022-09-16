class SecondTimer extends HTMLElement {

    // par défaut, tous les attributs ne sont pas observables, mais on va pouvoir en déclarer certains comme l'étant pour utiliser un fonction de callback intéressante qui réagit à la modifiction des attributs

    // return de la méthode static get observedAttributes() renvoie un tableau contenant les noms des attributs que vous voulez observer. Pour l'exemple, on en a qu'un :
    static get observedAttributes() { return ['mycustomattribute']}

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

    // le rappel est exécuté chaque fois que l'un des attributs est modifié d'une manière ou une autre
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "mycustomattribute" && oldValue !== newValue) {
            console.log('Custom element attributes changed')
            this.additionnalspan.innerHTML = newValue
        }
        // updateStyle(this);
    }

}

// pour l'instancier en quelque sorte, on le définit comme instace de la classe SecondTimer, identifiable comme élément <second-timer> :
customElements.define('second-timer', SecondTimer);


const addBtn = document.querySelector("#add")
const addNewInput = () => {
    const newInput = document.createElement('input')
    newInput.classList.add("form-control")
    newInput.classList.add("mb-2")
    const myForm = document.getElementById("myForm")
    myForm.appendChild(newInput)
    // et pour tester le setAttribute et l'obervattion du changement
    document.getElementsByTagName("second-timer")[0].setAttribute("mycustomattribute","Nouveau champ détecté !")
}
addBtn.addEventListener("click", addNewInput)

