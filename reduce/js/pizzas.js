const commandes = [{ name: "John", pizzaName: "Royale", quantity: 3 },
{ name: "Thomas", pizzaName: "Vegetarian", quantity: 2 },
{ name: "Sophie", pizzaName: "Mexican", quantity: 1 },
{ name: "Emma", pizzaName: "Royale", quantity: 2 }
]


// rappel : equivalentes --------------
for (let index = 0; index < commandes.length; index++) {
    const element = commandes[index].pizzaName;
    console.log(element);
}

for (let commande of commandes) {
    const element = commande.pizzaName;
    console.log(element);
}

commandes.forEach((element)=>console.log(element.pizzaName))

commandes.reduce((acc,element)=>console.log(element.pizzaName),{})

// fin rappel  --------------


const pizzasPerTypes = commandes.reduce(
    (acc, currentValue) => {
        if (Object.keys(acc).includes(currentValue.pizzaName)) {
            acc[currentValue.pizzaName] += currentValue.quantity
        } else { acc[currentValue.pizzaName] = currentValue.quantity }

        return acc
    }, {}
)

console.log(pizzasPerTypes);