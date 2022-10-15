import Book from "./Book.js";
import Library from "./Library.js";
import {notation} from "./Notations.js";




let firstBook = new Book("Guide des films", 2200)
// console.log(firstBook)
// firstBook.getPage()
// window.document.addEventListener("load", firstBook.nextPage())
let myLibrary = new Library()
myLibrary.addBook(firstBook);
console.log(myLibrary.books);

let secondBook = new Book("Guide des musés", 750)
myLibrary.addBook(secondBook)
console.log(myLibrary.books)

let thirdBook = new Book("Guide des océans", 2200)
let fourstBook = new Book("Guide des lacs", 2200)
myLibrary.addBooks([thirdBook,fourstBook])
console.log(myLibrary.books)

notation(3,"C'est formidable !!!", myLibrary.books);

console.log("après notation", myLibrary.books[3]);

console.log(Book.totalBooks);






