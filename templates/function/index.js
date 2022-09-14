const myButton = document.getElementById('myButton');

const showTemplate = (x) => {
    const myTemp = document.getElementById("article");
    const elementFromTemplate = myTemp.outerHTML.replaceAll("template", "div");
    const myElement = document.querySelectorAll(x)[0];
    console.log("myElement", myElement);
    myElement.innerHTML = elementFromTemplate;
}

showTemplate("main");



