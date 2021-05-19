// let  promesse = fetch("https://jsonplaceholder.typicode.com/posts")
// .then( (response)=>{
//     if(response.ok) console.log(response.text)
//     // les méthodes de response sont nombreuses
//     // consulter la doc https://developer.mozilla.org/en-US/docs/Web/API/Response
//     // et renvoient une promise dans la promesse initiale
//     else console.log(response.statusText)
//     })


// pour les requêtes GET
let promesse = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json();
    }).then(donnees => {
        // console.log(donnees);
        // console.log(donnees[0]);
        for (let donnee of donnees) {
            console.log(donnee.title);
        }
    })


// pour les requêtes POST
// on doit en second paramètre de fetch POST pour méthode
// faire passer un entête qui indiquera qu'on le type json des données qu'on fait passer

article =
{
    userId: 7,
    title: "sunt aut facere repellat provident",
    body: "quia et suscipit↵suscipit recusandae"
}


let promessepost = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    header: {
        'Content-Type': 'application/json'
    },
    // puisqu'on envoie un objet javascript pour le transformer en JSON
    body: JSON.stringify(article)
}).then(response => {
    if(response.ok){
        console.log("article créé")
    } 
})


// méthode PUT
let promesseput = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    header: {
        'Content-Type': 'application/json'
    },
    // puisqu'on envoie un objet javascript pour le transformer en JSON
    body: JSON.stringify(article)
}).then(response => {
    if(response.ok){
        console.log("article modifié")
    } 
})





