// exemple de fonction de callback qui se contentera de rendre visible des éléments invisibles avec pour faire jojo un peu de jeu d'opacité
const show = (x) => {
    x.style.visibility = "visible"
    setTimeout(
        x.style.opacity = 100
    ), 2000
}

const myFunction = (querySelected, functionToApply) => {
    console.log(Object.getPrototypeOf(querySelected).constructor.name == "NodeList");

    // on ne sait pas si on se retrouve avec un élément unique ou un tableau (NodeList) 
    // on envisage donc le cas d'une collection d'une suiite d'élements (NodeList)
    if (Object.getPrototypeOf(querySelected).constructor.name == "NodeList") {
        querySelected.forEach(elem => {

            if (elem.getBoundingClientRect().top < window.innerHeight - (window.innerHeight * 0.5)) {
                functionToApply(elem)
            }
        })
    }
    // sinon c'est que c'est un élément unique qui se verra appliqué la fonction sitôt qu'il franchit 50% de la hauteur du viewport
    else {
        if (querySelected.getBoundingClientRect().top < window.innerHeight - (window.innerHeight * 0.5)) {
            functionToApply(querySelected)
        }
    }

}

// Je teste maintenant en passant un élément en paramètre, puis la fonction que je souhaite voir appliquée

const divElement = document.querySelectorAll('DIV')
window.addEventListener("scroll", () => myFunction(divElement, show))