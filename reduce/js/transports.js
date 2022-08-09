// Utiliser reduce() pour créer un objet à partir d'un tableau

// imaginons un tableau simple des modes de transports utilisés  par des invités
const transports = ["voiture", "vélo", "marche", "voiture", "tram", "voiture", "marche", "moto"];
// on souhaite pouvoir créer un objet qui fasse le décompte du nombre de personnes
// qui viennent en voiture, en vélo, en tram...
// l'utilisation de reduce() fait le job. J'adore !

const transportObjet = transports.reduce(
    (acc, current) => {
        if (!acc[current]) {
            acc[current] = 0;
        } acc[current] += 1;        
        return acc;
        
    }, {}
);

console.log("tableau des transports", transportObjet);