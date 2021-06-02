// Je veux une fonction getPosts qui
  // Récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
  // Récupères les articles du premier utilisateur https://jsonplaceholder.typicode.com/comments?userId={ID}
  // renvois les articles au format JSON

  let get = function (url) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest()
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          } else {
            reject(xhr)
          }
        }
      }
      xhr.open('GET', url, true)
      xhr.send()
    })
  }
  
  let getPosts = async function () {
    // try {
      let response = await get('https://jsonplaceholder.typicode.com/users')
      let users = JSON.parse(response)
      //  console.log(users)
      response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
      let posts = JSON.parse(response)
    // } catch (e) {
    //   console.log('Il y a eu un problème', e)
    // }
    return posts
  }
  
  let getFirstPosts = async function () {
    let posts = await getPosts()
    return posts[0]
  }
  
  let demo = async function () {
    let arr = await Promise.all([getPosts(), getFirstPosts()])
    console.log(arr)
  }
  
demo()
  
  