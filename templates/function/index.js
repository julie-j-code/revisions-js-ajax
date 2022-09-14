const myButton = document.getElementById('myButton');

const showTemplate = (x,y) => {
    // x pour l'élement dans lequel on souhaite injecté le html
    // y pour l'identifiant du template qu'on souhaite utiliser
    const myTemp = document.getElementById(y);
    const elementFromTemplate = myTemp.outerHTML.replaceAll("template", "div");
    const myElement = document.querySelectorAll(x)[0];
    console.log("myElement", myElement);
    myElement.innerHTML = elementFromTemplate;
}

showTemplate("main","article");



