import { getAllBooks } from "./modules/databaseCommunications/firebaseRequests.js";
import { createBookCard } from "./modules/elementCreations/createCards.js";
import { Book } from "./modules/class/Book.js";
import { searchBooks } from "./modules/databaseCommunications/openLibraryRequest.js";
import { createSearchCard } from "./modules/elementCreations/createSearchResultCard.js";
import { manuallyAddBook } from "./modules/elementCreations/manuallyAddBook.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const searchBooksForm = document.querySelector('form');

renderHome();

export async function renderHome() {
  // reset form for when the client returns to the Home page
  searchBooksForm.reset();

  const databaseBooks = await getAllBooks();
  for (const id in databaseBooks) {
    const book = new Book(id, databaseBooks[id].title, databaseBooks[id].author, databaseBooks[id].publishYear, databaseBooks[id].isRead, databaseBooks[id].score);
    createBookCard(book);
  }
}


searchBooksForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(searchBooksForm);
  const formObj = Object.fromEntries(formData.entries());

  try {
    const books = await searchBooks(formObj);

    // ADD: extra checks for client rendered information on books not found
    // if (formObj.lenght === 0){
    //   createErrorCard(); 
    // }

    // render ten books max. Update in future 
    createSearchCard(books);

  }
  catch (error) {
    console.log(error);
  }
  manuallyAddBook();
});

// lets client return 'home' at all times
const home = document.getElementById('app');
const bookshelfHome = document.querySelector('h1');
bookshelfHome.classList.add('home');
bookshelfHome.addEventListener('click', () => {
  home.innerText = " ";
  renderHome();
});


