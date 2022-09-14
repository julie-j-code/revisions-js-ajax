const myButton=document.getElementById('myButton');
var myElement = document.getElementsByTagName('main')[0];
console.log("myElement", myElement);

const showTemplate=(x)=>{
     const myList=document.getElementById("article");
     const elementFromTemplate=myList.outerHTML.replaceAll("template","div");
     console.log("elementFromTemplate",elementFromTemplate);
     myElement.innerHTML=elementFromTemplate; 
 }

myFunction(main);



