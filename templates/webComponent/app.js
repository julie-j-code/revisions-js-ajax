import ColContainer from "./components/ColContainer.js";
import NewsArticle from "./components/NewsArticle.js";
import SecondTimer from "./components/SecondTimer.js";

customElements.define('second-timer', SecondTimer);

const addBtn = document.querySelector("#add")
const addNewInput = () => {
    const newInput = document.createElement('input')
    newInput.classList.add("form-control")
    newInput.classList.add("mb-2")
    const myForm = document.getElementById("myForm")
    myForm.appendChild(newInput)
    // et pour tester le setAttribute et l'obervattion du changement
    document.getElementsByTagName("second-timer")[0].setAttribute("mycustomattribute","Nouveau champ détecté !")
}
addBtn.addEventListener("click", addNewInput)


customElements.define("col-container", ColContainer);

customElements.define("news-article", NewsArticle)

