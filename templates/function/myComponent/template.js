
// import "./template.html";

// alternativement, pour charger la page tout simplement et l'injecter. ça marche bien
export function loadTemplate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelectorAll("my-paragraph")[0].innerHTML= this.responseText
        // document.querySelectorAll("main")[0].innerHTML= this.responseText
      }
    };
    xhttp.open("GET", "./myComponent/template.html ", true);
    xhttp.send();

  }





    
