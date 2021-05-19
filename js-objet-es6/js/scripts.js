let titulaire1 = new Titulaire("Gambier", "Benoit");

console.log(titulaire1);

let titulaire2 = new Titulaire("Talu", "Jean");

console.log(titulaire2.nom);

titulaire2.identite();

let titulaire3 = new Titulaire("Penneflamme", "Katy");
let compte1 = new Compte(titulaire3, 25);

console.log(compte1);

compte1.crediter(150);

console.log(compte1);

compte1.debiter(20);

compte1.afficherSolde();

let compteEpargne = new CompteEpargne(titulaire2, 15);

console.log(compteEpargne);

compteEpargne.crediter(35);
compteEpargne.crediter(35);
compteEpargne.crediter(35);
compteEpargne.crediter(35);

console.log(compteEpargne);
compteEpargne.debiter(35);
console.log(compteEpargne);

compteEpargne.afficherSolde();