const user = {
    name: "John",
    age: 35,
    taille: 185
}
// ici, je rajoute une propriété à l'objet user
// user.poids=75
// console.log(user);

const userCopy = { ...user }
console.log(userCopy);

// ici, je rajoute une propriété à la copie de user
const userCopyExtended = { ...user, poids: 75 }
console.log(userCopyExtended);

const panierFruisRouges = {
    fraises: 15,
    cerises: 30,
    myrtilles: 50
}
const panierFruisJaunes = {
    pêches: 15,
    poires: 30,
    bananes: 50
}
// je copie l'ensemble des clés/valeurs des 2 premiers pour en faire un unique objet
const panierFruits = { ...panierFruisJaunes, ...panierFruisRouges }
console.log(panierFruits);

const chatsRefuge = {
    siamois: 3,
    persan: 5,
    sphynx: 2,
    ragdoll: 4
}

for (chat in chatsRefuge) {
    console.log("for in!!!!!!!!!!!!!!!", chat);
}

// Puisque for of ne marche pas pour des objets, si on veut obtenir juste les valeurs des clés/valeurs
for (element in chatsRefuge) {
    console.log(element, chatsRefuge[element]);
}

const utilisateurs = [
    "john", "julie", "emma", "joe"
];

// for in retourne l'INDEX
for (index in utilisateurs) {
    console.log("for in array", index);
}
// for of retourne la VALEUR : EXCLUSIVEMENT pour ARRAYS
for (value of utilisateurs) {
    console.log("for of array", value);
}

utilisateurs.forEach((element, index) => {
    console.log("element du foreach seul", element);
    console.log(`elemnt ${element} d'index ${index}`)
});


const voiture = {
    marque: "volvo",
    couleur: "rouge",
    année: 2020
}

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/delete !!! 
delete voiture.année
console.log(voiture);

const pays = {
    nom: "Liechtenstein",
    population: 38749,
    capitale: "Vaduz"
}

// const nom = pays.nom; ok ! 
// const {nom}=pays;
// console.log(nom);

// ok ! va renommer le pays
// pays.nom="France"; 

// dans ce cas, on renomme la propriété avec du destructuring
const { nom: nomPays } = pays;
console.log(nomPays);
// c'est moyen

const depenses = {
    chauffage: 35,
    voiture: 50,
    internet: 25,
    alimentaire: 300,
    vestimentaire: 150
}


const depensesdddddd = Object.values(depenses).reduce((previous, current) => {
    return previous + current
}, 0)

console.log(depensesdddddd);

/* reduce s'appliquant à des arrays, il faut au préalable récupérer les valeurs en un tableau pour pouvoir en bénéficier. c'est efficace et propre !!!!!!!! */
const total = Object.values(depenses).reduce((acc, current) => {
    return acc + current;
})
console.log(total);

// fonction constructor rappel

function Bird() {
    // on pourrait dire en quelque sorte que weight est public 
    // parce qu'il a été indirectement déclaré à l'exterieur de la fonction
    this.weight = 15;
}
function Bird() {
    // pour faire en sorte que weight soit privée 
    let weight = 15;
    // et qu'on puisse juste y accéder par une méthode qui elle est publique
    this.getWeight = function () {
        return weight;
    }
}

let pigeon = new Bird;
console.log(pigeon.getWeight());

// tester si palindrom ou pas
function palindrome(str) {
    // faut déjà s'assurer qu'il n'y a ni espace \s ni nombre \d ni caractère spéciaux, c'est à dire qui ne sont pas compris entre a et x
    let strOptimised = str.toLowerCase().replace((/\s|\d|([^a-z])/gi), '')
    // on le transforme en tableau pour pouvoir l'inverser et le comparer à l'initial
    console.log([...strOptimised].reverse().toString().replace((/,/g), ''));
    console.log([...strOptimised].toString().replace((/,/g), ''));

    if ([...strOptimised].reverse().toString().replace((/,/g), '') == [...strOptimised].toString().replace((/,/g), '')) {
        console.log("true")
    } else { console.log("false") }

}



const array = [5, 6, 8, 9]
console.log(array.toString().replace((/,/g), ''), "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

// Autre solution ++++ 
/*function palindrome(str) {

let regex=/[A-Za-z0-9]+/g

let target=str.match(regex).join("").toLowerCase()

return target==target.split("").reverse().join("")

}

palindrome("eye");*/

palindrome("kayak");

function telephoneCheck(str) {

    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // match est intéressant. il filtre en excluant TOUT ce qui ne match pas avec regex

    console.log(str.match(regex));
}

telephoneCheck("356-555-666");

var players = [
    { number: 0, letter: 'S' },
    { number: 1, letter: 'C' },
    { number: 2, letter: 'S' },
    { number: 3, letter: 'C' },
    { number: 4, letter: 'S' },
    { number: 5, letter: 'R' },
    { number: 6, letter: 'L' },
    { number: 7, letter: 'C' },
    { number: 8, letter: 'S' },
    { number: 9, letter: 'P' },
    { number: 10, letter: 'R' },
    { number: 11, letter: 'L' }
]
const letters = ["R", "P", "C", "L", "S"];
const player = {
    number: 0,
    letter: ""
}


// function repartition(numberPlayers) {
//     if (numberPlayers % 2 == 0) {
//         for (let index = 0; index < numberPlayers; index++) {
//             console.log(index);
//             player.letter = letters[Math.floor(Math.random() * letters.length)];
//             player.number = index;
//             players.push({ number: index, ...player });
//         }
//         return players;

//     } else {
//         return "le nombre de participants doit être paire"
//     }
// }

// on part sur la base de ce tableau
// console.log(repartition(12));

// Règles sorties gagnantes
const winerRules = ["PR", "RL", "LS", "SC", "CL", "LP", "PS", "SR", "RC"];
let newPlayers = []

function game(playerNumb1, playerNumb2) {

    if (players.length != 0 && players[playerNumb1] && players[playerNumb2]) {


        let result = `${players[playerNumb1].letter}${players[playerNumb2].letter}`;
        console.log(result);


        if (winerRules.includes(result) || players[playerNumb1].letter == players[playerNumb2].letter) {
            console.log("Le gagnant est le premier", playerNumb1);
            newPlayers.push(players[playerNumb1]);
            players.splice(players[playerNumb1], 1)

        } else if (winerRules.includes(result.split("").reverse().join(""))) {
            console.log("Le gagnant est le second", playerNumb2);
            newPlayers.push(players[playerNumb2]);
            players.splice(players[playerNumb2], 1)
        }

        console.log("tableau en sortie", newPlayers);
        console.log("tableau des restants", players);
    }

    else {
        return "la partie est terminée"
    }


    /*Scissors cuts Paper
    Paper covers Rock
    Rock crushes Lizard
    Lizard poisons Spock
    Spock smashes Scissors
    Scissors decapitates Lizard
    Lizard eats Paper
    Paper disproves Spock
    Spock vaporizes Rock
    Rock crushes Scissors*/

}

console.log(players[0].letter);

game(0, 1);
console.log(newPlayers);

game(2, 3);
console.log(newPlayers);

game(4, 5);
console.log(newPlayers);

game(6, 7);
console.log(newPlayers);

game(8, 9);
console.log(newPlayers);


// string ------------------------- 

function findA(str) {
    return str.indexOf("a")
}

console.log("findA", findA("Banana"))

function extractA(str) {
    return str.split("a").join("")
}

console.log("extractA", extractA("Banana"))

function extractBan(str) {
    console.log(str);
    // const newStr = str.split("").splice(0, 3).join("");
    // equivalent désigné
    const newStr = str.substr(0, 3);
    console.log("newString", newStr);
    console.log("String en sortie inchangée", str);
}

extractBan("Banana")

// codingame interview : 

function calc(array, n1, n2) {
    if (n2 < array.length) {
        array.reduce((acc, current) => {
            if (current <= n2) {

                console.log(acc + current)
                return acc + current;
            }
        }, n1)
    }
}

calc([0, 1, 2, 3, 4, 5, 3], 0, 1)





