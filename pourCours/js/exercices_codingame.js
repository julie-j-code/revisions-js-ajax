// https://www.codingame.com/playgrounds/3777/exercices-de-javascript-pour-debutants-en-informatique/javascript---les-boucles

// Boucles -----------------------------

function puissance(x, y) {
    return Math.pow(x, y);
}

const posX = [];
const posY = [];

function initXY(x0, y0) {

    for (let i = 0; i < 20; i++) {
        posX[i] = x0 + (i * 40);
        posY[i] = y0 + (i * 30);
    }
}


// Réalisez la fonction sortNumbers
const tInit = [1, 30, 9, 5, 25]
const tInf = []
const tSup = []
function sortNumbers(tInit, tInf, tSup) {
    // tInit.sort((a,b)=>a-b);
    console.log("iInit après sort", tInit);
    for (item of tInit) {
        if (item < 10) {
            tInf.push(item);
        } else {
            tSup.push(item);
        }
    }
}

// plus élégant
// function sortNumbers( tInit, tInf, tSup)
// {
// tInit.forEach((el)=> (el < 10) ? tInf.push(el): tSup.push(el))
// }


sortNumbers(tInit, tInf, tSup);

//  tests conditionnels --------------------------------------------

// Ecrivez la fonction isTooLong
// si str est une chaîne alors str.length renvoie sa longueur

function isTooLong(str) {
    if (str.length > 10 && typeof str === 'string') return true;
    else return false;
}

function myFct(arg1, arg2) {
    if (typeofarg1 == 'number' && typeof (arg2) == 'number') { return arg1 * arg2 + arg1 + arg2 }
    else return "-999999999";
}

function aprec(notation) {
    if (notation >= 0 && notation < 7) {
        return "Hideux";
    }
    else if (notation > 6 && notation < 10) {
        return "Moche";
    }
    else if (notation > 9 && notation < 15) {
        return "Nice";
    }
    else if (notation > 14 && notation < 21) {
        return "GG";
    }
    else { return "BUG"; }

}


