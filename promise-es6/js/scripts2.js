
// grafikart

let ajaxGet = function (url) {
    // On renvoie une promesse qui prend en paramettre une fonction 
    // avec 2 paramètres, le callback de succès et d'erreur
    return new Promise(function (resolve, reject) {
      // Le reste du code ressemble à la méthode précédente
      let req = new XMLHttpRequest()
      req.open('GET', url, true)
      req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
           if(req.status == 200)
             resolve(req.responseText)
           else
             reject(req)
        }
      };
      req.send(null)
    })
  }
  
  // L'appel à la fonction peut se faire de cette manière là
  ajaxGet('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // Le serveur a correctement répondu
  }).catch(function (req) {
    // Le serveur n'a pas répondu comme attendu
  })


// Deuxième option en Cascade
// ajaxGet('https://jsonplaceholder.typicode.com/users')
// .then(function (response) {
//   // Si le then retourne une promesse on peut enchainer
//   return ajaxGet('https://jsonplaceholder.typicode.com/posts')
// })
// .then(function (response) {
//   // Si le then retourne une promesse on peut enchainer
//   return ajaxGet('https://jsonplaceholder.typicode.com/comments')
// })
// .then(function (response) {
//   // La série d'opération est finie
// })
// .catch(function (req) {
//   // Une des requête a échouée
// })

// // 3ème option : En parallèle
// Promise.all([
//   ajaxGet('https://jsonplaceholder.typicode.com/users'),
//   ajaxGet('https://jsonplaceholder.typicode.com/posts'),
//   ajaxGet('https://jsonplaceholder.typicode.com/comments')
// ]).then(function (responses) {
//   responses // [response1, response2, response3]
// }).catch(function (errors) { })