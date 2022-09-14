const main = document.querySelector("main");

// On récupère le template souhaité
const template = document.querySelector("#article-template");

// On récupère les données
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(posts => {
    for(let post of posts){
        const clone = document.importNode(template.content, true);
        const baliseH1 = clone.querySelector(".article-title");
        const baliseP = clone.querySelector(".article-content");
        baliseH1.textContent = post.title;
        baliseP.textContent = post.body;
        main.appendChild(clone);
    }
});