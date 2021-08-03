const amounts = [20, 30, 75];
// console.log("amounts", amounts);
const cumul = amounts.reduce(
    (acc, current) => {
        return acc = acc + current;
    }, 0
);

const panier = [
    {
        id: 1,
        title: "tomates",
        prix: 20,
        quantity: 2
    },
    {
        id: 1,
        title: "tomates",
        prix: 20,
        quantity: 3
    },
    {
        id: 1,
        title: "tomates",
        prix: 20,
        quantity: 1
    }
];
const total = panier.reduce(
    (acc, current) => {
        return acc = acc + (current.prix * current.quantity);
    }, 0
);

console.log(`le total du tableau amounts est : ${cumul}`);
console.log(`le total du panier est : ${total}`);