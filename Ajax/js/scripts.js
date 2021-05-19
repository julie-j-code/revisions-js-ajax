// Fonctionnement synchrone

/**
 * Cette fonction permet d'envoyer une requête en méthode GET pour lire un contenu
 */
function ajaxGet(){
    // Instanciation de l'objet
    let req = new XMLHttpRequest();

    // Ecouteur d'évènement sur changement de l'état prêt
    req.onreadystatechange = function() {
        if (req.readyState == 4 && (req.status == 200 || req.status == 0)) {
            console.log(req.response);
            let donnees = JSON.parse(req.response);
            console.log(donnees);
            // ES8: Traitement de l'objet
            Object.entries(donnees.produits).forEach(element => {
                console.log(element);
            });
        } else if (req.readyState < 4) {
            console.log(req.readyState);
        }
    };

    // Spécifie la méthode, l'url et le type d'exécution à utiliser
    req.open("GET", "http://api-rest.test/produits/lire.php", true);

    // Envoie la requête
    req.send();
}

/**
 * Cette fonction permet d'envoyer une requête en méthode POST pour créer un contenu
 */
function ajaxPost(){
    // Instanciation de l'objet
    let req = new XMLHttpRequest();

    // Ecouteur d'évènement sur changement de l'état prêt
    req.onreadystatechange = function() {
        if (req.readyState == 4 && (req.status == 201 || req.status == 0)) {
            console.log(req.response);
        } else if (req.readyState < 4) {
            console.log(req.readyState);
        }
    };

    // Stockage des données à envoyer dans un objet
    let produit = {
        nom: "Produit1",
        description: "Ceci est le produit 1",
        prix: 89,
        categories_id: 3
    }

    // Spécifie la méthode, l'url et le type d'exécution à utiliser
    req.open("POST", "http://api-rest.test/produits/creer.php", true);

    // Envoie la requête avec les données en json
    req.send(JSON.stringify(produit));
}

/**
 * Cette fonction permet d'envoyer une requête en méthode POST pour créer un contenu
 */
function ajaxPut(){
// Instanciation de l'objet
let req = new XMLHttpRequest();

// Ecouteur d'évènement sur changement de l'état prêt
req.onreadystatechange = function() {
    if (req.readyState == 4 && (req.status == 200 || req.status == 0)) {
        console.log(req.response);
    } else if (req.readyState < 4) {
        console.log(req.readyState);
    }
};

// Stockage des données à envoyer dans un objet
let produit = {
    id: 67,
    nom: "Produit1",
    description: "Ceci est le produit 1 modifié",
    prix: 79,
    categories_id: 3
}

// Spécifie la méthode, l'url et le type d'exécution à utiliser
req.open("PUT", "http://api-rest.test/produits/modifier.php", true);

// Envoie la requête avec les données en json
req.send(JSON.stringify(produit));
}

/**
 * Cette fonction permet d'envoyer une requête en méthode POST pour créer un contenu
 */
function ajaxDelete(){
    // Instanciation de l'objet
    let req = new XMLHttpRequest();

    // Ecouteur d'évènement sur changement de l'état prêt
    req.onreadystatechange = function() {
        if (req.readyState == 4 && (req.status == 200 || req.status == 0)) {
            console.log(req.response);
        } else if (req.readyState < 4) {
            console.log(req.readyState);
        }
    };

    // Stockage des données à envoyer dans un objet
    let produit = {
        id: 69
    }

    // Spécifie la méthode, l'url et le type d'exécution à utiliser
    req.open("DELETE", "http://api-rest.test/produits/supprimer.php", true);

    // Envoie la requête avec les données en json
    req.send(JSON.stringify(produit));
}


// Equivalent en jQuery pour la méthode GET
$.ajax({
    url: "http://api-rest.test/produits/lire.php"
}).done(function(reponse){
    let donnees = JSON.parse(reponse);
    console.log(donnees);
});