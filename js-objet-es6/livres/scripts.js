import Book from "./Book.js";
// import {notation} from "./Notations.js";

let firstBook = new Book("Guide des films", 2200)
console.log(Book.allBooks)
let secondBook = new Book("Guide des musés", 750)
console.log(Book.allBooks)

let thirdBook = new Book("Guide des océans", 2200)
let fourstBook = new Book("Guide des lacs", 2200)
console.log(Book.allBooks)

Book.evaluate(3,"C'est formidable !!!", Book.allBooks);
console.log("après notation", Book.allBooks[3]);

Book.evaluate(2,"Très instructif ", Book.allBooks);
console.log("après notation", Book.allBooks[2]);

Book.findByWord("Océan")

console.log(Book.totalBooks);






