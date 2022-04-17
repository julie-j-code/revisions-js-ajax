// Je veux une fonction getPosts qui
  // Récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
  // Récupères les articles du premier utilisateur https://jsonplaceholder.typicode.com/comments?userId={ID}
  // renvois les articles au format JSON

   
  let getPosts = async function () {
    // try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      // let users = JSON.parse(response)
      let users = await response.json();
       console.log("users", users[0])
      response = await fetch('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
      // let posts = JSON.parse(response)
      let posts = await response.json();
      console.log("posts du premier utilisateur", posts);
      let firstPosts = posts[0];
      console.log("premier post", firstPosts);
    // return posts
  }

  getPosts();




  


  
  
//   let demo = async function () {
//     let arr = await Promise.all([getPosts(), getFirstPosts()])
//     console.log(arr)
//   }
  
// demo()
  
  