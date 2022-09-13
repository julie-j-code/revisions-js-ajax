window.onload = () => {

    const menu = document.getElementById("context-menu");

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        menu.style.display = "block";
        // console.log(menu.clientWidth);

        const posX = event.clientX;
        const posY = event.clientY;

        // faut calculer la position la plus à droite du menu pour qu'il ne soit pas coupé
        // equivalent de la largeur de la fenêtre - largeur du menu avec une marge additionnelle de 5px à droite
        const maxX = window.innerWidth - menu.clientWidth;
        // equivalent de la hauteur de la fenêtre - hauteur du menu 
        const maxY = window.innerHeight - menu.clientHeight;
        posX < maxX ? menu.style.left = posX + "px" : menu.style.left = maxX;
        posY < maxY ? menu.style.top = posY + "px" : menu.style.top = maxY;

        // menu.style.top = posY + "px";
        // menu.style.left = posX + "px";
    })

    document.addEventListener("click", () => {
        menu.style.display = "none"
    })




}