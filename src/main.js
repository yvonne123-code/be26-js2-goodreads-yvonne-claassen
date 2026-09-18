// import 
import { getAllBooks } from "./modules/firebaserequests.js";
import { createCards } from "./modules/createCards.js";
import { Book } from "./modules/Book.js";

// variables
const home = document.querySelector('app');


// functions 
// render homepage
async function renderHome(){
  // render cards per book in database
  const books = await getAllBooks(); 
  // console.log(books);
  for(const id in books){
    console.log(id)
    const book = new Book(id, books[id].title, books[id].author, books[id].publishYear, books[id].isRead, books[id].score );
    createCards(book);
  }
  
} 
renderHome(); 

