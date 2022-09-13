window.onload = () => {

    const menu = document.getElementById("context-menu");

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        menu.style.display = "block";

        const posX = event.clientX;
        const posY = event.clientY;

        menu.style.top = posY + "px";
        menu.style.left = posX + "px";
    })

    document.addEventListener("click", () => {
        menu.style.display = "none"
    })




}