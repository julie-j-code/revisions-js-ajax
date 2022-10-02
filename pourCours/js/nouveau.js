const panierFruisRouges = {
    fraises: 15,
    cerises: 30,
    myrtilles: 50
}
const panierLegumesVerts = {
    tomates: 15,
    courgettes: 30,
    betterave: 50
}
const panierFruisJaunes = {
    pêches: 15,
    poires: 30,
    bananes: 50
}
const panierSalades = {
    laitue: 15,
    battavia: 30,

}


let panier= []
panier = [ ...panier,panierFruisRouges,panierFruisJaunes, panierSalades]

function removeItem(name){    
    for (let item of panier){
        console.log(Object.keys(item))
        if (Object.keys(item).includes(name)) {
            // console.log(panier.indexOf(item)) 
            let indexItemToRemove=  panier.indexOf(item)  
            panier.splice(indexItemToRemove,1)                   
        }        
    }

    return panier
}

console.log("panier avant delete", panier);
removeItem("bananes");
console.log("panier après delete", panier)

