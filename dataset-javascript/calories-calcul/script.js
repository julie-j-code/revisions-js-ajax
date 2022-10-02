const plats = document.querySelectorAll("li")

// console.log(plats);

function choisir() {
    console.log(this.dataset.choisi == "true")
    this.dataset.choisi == "true" ? this.dataset.choisi = "false" : this.dataset.choisi = "true"
    // met à jour le compteur
    count()
}

plats.forEach(plat => {
    plat.addEventListener("click", choisir)
})

const counter = document.querySelector("#counter")

function count() {
    counter.textContent = document.querySelectorAll('li[data-choisi="true"]').length
    add()
}

const displayTotal = document.querySelector("#total")

function add() {
    const selectedItemsArray = Array.from(document.querySelectorAll('li[data-choisi="true"]'))
    // console.log(selectedItemsArray)
    const totalCalories = selectedItemsArray.reduce((total, plat) => total + Number(plat.dataset.calories), 0)  
    displayTotal.textContent=totalCalories 

}
