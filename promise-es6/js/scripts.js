/**
 * Cette fonction effectue un appel Ajax vers une url
 * @param {string} url 
 */
function ajaxGet(url){
    return new Promise(function(resolve, reject){
        // Nous allons gérer la promesse
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
            // Si le traitement est terminé
            if(xmlhttp.readyState == 4){
                // Si le traitement est un succès
                if(xmlhttp.status == 200){
                    // On résoud la promesse et on renvoie la réponse
                    resolve(xmlhttp.responseText);
                }else{
                    // On résoud la promesse et on envoie l'erreur
                    reject(xmlhttp);
                }
            }
        }

        // Si une erreur est survenue
        xmlhttp.onerror = function(error){
            // On résoud la promesse et on envoie l'erreur
            reject(error);
        }

        xmlhttp.open('GET', url, true);
        xmlhttp.send(null);
    })
}

// On demande une URL
ajaxGet('https://jsonplaceholder.typicode.com/users').then(reponse => {
    // On reçoit une réponse
    let users = JSON.parse(reponse)

    // On envoie une nouvelle demande
    return ajaxGet('https://jsonplaceholder.typicode.com/posts?userId='+ users[0].id)
}).then(reponse2 => {
    // On traite la 2ème réponse
    console.log(reponse2)
})
.catch(erreur => {
    // On traite l'erreur
    console.log(erreur)
})

// On crée une fonction asynchrone
let getPosts = async function(){
    // On attend la réponse
    let reponse = await ajaxGet('https://jsonplaceholder.typicode.com/posts')
    // On retourne la réponse
    return JSON.parse(reponse)
}

// On traite la réponse
getPosts().then(posts => {
    console.log(posts)
})