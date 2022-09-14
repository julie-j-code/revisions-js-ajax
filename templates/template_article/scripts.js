const main = document.querySelector("main");

// On récupère le template souhaité
const template = document.querySelector("#article-template");

// // On clone le template
const clone = document.importNode(template.content, true);

// // On va chercher le h1
const baliseH1 = clone.querySelector(".article-title");

// // On va chercher la balise p
const baliseP = clone.querySelector(".article-content");

// // On injecte le contenu souhaité
baliseH1.textContent = "Titre de l'article";
baliseP.textContent = "Texte de l'article";

// // On ajoute le clone dans le document
main.appendChild(clone);