// import 
import { getAllBooks, postBook } from "./modules/firebaserequests.js";
import { createCards } from "./modules/createCards.js";
import { Book } from "./modules/Book.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// variables
const home = document.getElementById('app');
const form = document.querySelector('form');


// functions 
// render homepage
export async function renderHome() {

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

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData.entries());
  
  console.log(formObj);

  try{
    await postBook(formObj);
    form.reset();
    
  }
  catch(error){
    console.log(error);
  }
   
  home.innerHTML = ""; 
  renderHome(); 
})

