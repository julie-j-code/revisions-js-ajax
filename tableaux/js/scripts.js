let tableau = ["Bonjour", 12, true, "Brouette"];
let longueur = tableau.length;
console.log(`la longueur de mon tableau est : ${longueur}`)


// ajout à la fin
// console.log("longueur de mon tableau",tableau.push(25,"ajout"));

longueur = tableau.push(25, "ajout");
console.log(`la longueur de mon tableau apres push est : ${longueur}`)


// ajout au début du tableau
longueur = tableau.unshift(28, "début");
console.log(`la longueur de mon tableau après unshift est : ${longueur}`)

// retirer une valeur du tableau à la fin
let valeur = tableau.pop();
console.log(`la longueur de mon tableau après pop est : ${longueur} 
et la valeur retirée est ${valeur}`)

// retirer une valeur du tableau au début
valeur = tableau.shift();
console.log(`Je viens de sortir du tableau la première valeur : ${valeur}`);


console.table(tableau);
// je veux insérer une valeur ni au début ni à la fin
// insérer citron sans rien supprimer
tableau.splice(3, 0, "citron");
console.table(tableau);
// insérer 25 en supprimant la 4ème
// ce qui revient à remplacer la 4ème
tableau.splice(4, 1, 25);
console.table(tableau);

// parcourir un tableau
// à l'ancienne
for (let ligne = 0; ligne < tableau.length; ligne++) {
    console.log(tableau[ligne]);
}

// méthode 2 : for in beaucoup plus courte
// ici, j'ai accès à l'index, mais pas directement aux valeurs
for (ligne in tableau) {
    console.log(tableau[ligne]);
}

// méthode 3 : for of fantastique, 
// j'ai directement accès à la valeur qui m'a été donnée
// en fait ici, j'ai accès aux valeurs, mais pas à l'idex
for (let valeur of tableau) {
    console.log(valeur);
}

// méthode 4 : foreach au top
// car ici, j'ai accès aux 2 informations : index et valeur
// attention cependant à la syntaxe : fonction de callback
// attention également au fait que le premier paramètre est toujours la valeur
// le deuxième paramète, index étant optionnel
tableau.forEach((valeur, index) => {
    // console.log(index, valeur);
    console.log(valeur);
});

// transformer un tableau avec map
// fait une copie du précédent 
// en exécutant les instructions passées à la fonction de callback
console.log("methode map");
// tableau.map((valeur, index)=>{
//     tableau2 = `${valeur} ${index}`;
//     console.log(tableau2);    
// })
let nouveautableau = tableau.map((valeur, index) => {
    return `${valeur} - ${index}`;
})
console.table("nouveau tableau", nouveautableau);

// autre utilisation
console.log ("méthode map optimisée")
let optimisationrendu = tableau.map((valeur, index) => {
    if (!isNaN(valeur)) {
        return valeur * 2;
    } else { return valeur; }
});
console.table(optimisationrendu);

// filter fait une copie du précédent
// ne retournant que les valeurs qui matchent la condition du filtre
console.log("extraction dans un nouveau tableau des seules valeures textuelles");
let tableautexte = tableau.filter((valeur)=>{
    return isNaN(valeur);
});
console.table(tableautexte);

// rechercher le premier élément du tableau supérieur à 5
let recherche = tableau.find(element => element > 5);
console.log(recherche);

// convertir en string
console.log(tableau.toString);