const divElement = document.querySelectorAll('DIV')

// Différence entre la hauteur de viewport (fenêtre) et hauteur du document ? 

// 1 --------- sont rigoureusement équivalents, et correspondent bien à la hauteur de la fenêtre = viewport
console.log("innerHeight", window.innerHeight);
console.log("document clientHeight", document.documentElement.clientHeight);
// ---------- beaucoup plus grand, correspond bien à la hauteur du document, plus précisément du body
console.log(document.body.clientHeight);

// Différence entre la position du haut d'un élément et le début du viewport. Pour la gestion des animations au sroll, c'est ce qui nous intéressera
console.log('getBoundingClientRect', document.querySelector("#myDiv5").getBoundingClientRect().top)

// Ces valeurs sensiblement différentes l'une de l'autre tiennent belle et bien compte de la distance qui sépare le haut de l'élément du début de body. Elles ne sont donc  pas relatives au  viewport. 
console.log(document.querySelector("#myDiv5").offsetTop)
console.log(document.querySelector("#myDiv5").offsetY)

// on peut déduire de ce qui précède le calcul du moment où un élément rentre dans notre champ de vision. dépasse la ligne de flottaison. c'est le moment où le haut de l'élément est  positionné à une distance du haut du viewport correspondant à la hauteur du viewport
// cependant, si on s'en tenait à cette "intersection", les animations seraient déclenchées beaucoup trop top : à l'instant où l'élément concerné rentre dans le champ de vision. 
// comme on souhaite retarder cet instant  pour par exemple attendre que l'élément arrive au milieu de l'écran, on peut utiliser window.innerHeight*0.5 comme référence

if(document.querySelector("#myDiv5").getBoundingClientRect().top<window.innerHeight-(window.innerHeight*0.5)){console.log("bingo !")}


// exemple de fonction de callback qui se contentera de rendre visible des éléments invisibles
const show = (x) => { 
    x.style.visibility = "visible"
    setTimeout(
        x.style.opacity=100
    ),2000
 }

// on vérifie si ça marche au global : ok
// window.addEventListener("load", () => {
//     divElement.forEach((x)=>show(x))
// })

// Pour simplifier dans un premier temps, je teste la fonction sans lui passer de paramètre, en faisant en sorte qu'elle s'applique à mon divElement initialisé en haut de page.
// Pour simplifier dans un premier temps, je teste la fonction sans lui passer de paramètre, en faisant en sorte qu'elle s'applique à mon divElement initialisé en haut de page.
window.addEventListener("scroll", () => {

    // on ne sait pas si on se retrouve avec un élément ou une collection 
    // on envisage donc le cas d'une collection d'éléments
    if (Object.getPrototypeOf(divElement).constructor.name == "NodeList") {
        divElement.forEach(elem => {
            
            if(elem.getBoundingClientRect().top<window.innerHeight-(window.innerHeight*0.5)){
                show(elem)
            }
        })
    }
    // sinon c'est que c'est un élément unique qui se verra appliqué la fonction sitôt qu'il franchit 50% de la hauteur du viewport
    else {
        if(elem.getBoundingClientRect().top<window.innerHeight-(window.innerHeight*0.5)){
            show(elem)
        }
    }

})