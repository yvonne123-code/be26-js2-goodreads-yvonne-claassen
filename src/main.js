// import 
import { getAllBooks } from "./modules/firebaserequests.js";
import { createCards } from "./modules/createCards.js";
import { Book } from "./modules/Book.js";
import { searchBooks } from "./modules/APIrequests.js";
import { createSearchCards } from "./modules/createSearchCards.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// variables
const form = document.querySelector('form');


// functions 

export async function renderHome() {
  // reset form for when returning to Home
  form.reset(); 

  // render cards per book in database
  const books = await getAllBooks();
  // console.log(books);
  for (const id in books) {
    console.log(id)
    const book = new Book(id, books[id].title, books[id].author, books[id].publishYear, books[id].isRead, books[id].score);
    createCards(book);
  }

}
renderHome();

// search for books using API 

form.addEventListener('submit', async(event) =>{
  event.preventDefault(); 
  
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData.entries());
  // const stringSearch = JSON.stringify(formObj);

  try {
    const books = await searchBooks(formObj); 

    // render ten books max. 
    createSearchCards(books);
    
  }
  catch(error){
    console.log(error);
  }

  
})



