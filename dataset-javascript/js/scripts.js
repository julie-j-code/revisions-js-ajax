window.onload = () => {
    let balises = document.querySelectorAll("a.btn")
    for(let balise of balises){
        balise.addEventListener("click", persoModale)
    }
}

function persoModale(){
    // On va lire les attributs data
    let titre = this.dataset.titre
    let couleur = this.dataset.couleur

    // On injecte le titre dans la modale
    document.querySelector("#modale .modal-title").innerText = titre

    // On écrit le texte de la modale
    let texte = `Voulez-vous ouvrir la ${titre} ?`

    // On injecte le texte
    document.querySelector("#modale .modal-body").innerText = texte

    // On personnalise le bouton
    // On efface les classes existantes
    let bouton = document.querySelector("#modale .modal-footer a")
    bouton.className = ""

    // On écrit les classes souhaitées
    bouton.classList.add("btn", `btn-${couleur}`)
}