import { renderHome } from "../../main.js";
import { postBook } from "../databaseCommunications/firebaseRequests.js";
import { createCardBody } from "./createCards.js";
import { createPostBtn} from "./createButtons.js";
import { createListItem, createListItemBold, createList } from "./createListItems.js";

const home = document.getElementById('app');

export function createSearchCard(books) {
    home.innerText = " ";

    // only ten cards/books for now
    const tenBooks = books.docs.slice(0, 10);

    tenBooks.forEach(result => {
        const title = result.title;
        const author = result.author_name;
        const yearPublished = result.first_publish_year;

        const cardBody = createCardBody();

        const ul = createList();
        cardBody.append(ul);

        const bookTitle = createListItemBold(ul);
        bookTitle.innerText = title;

        const bookAuthor = createListItem(ul); 
        bookAuthor.innerText = "Författare: " + author;

        const publishYear = createListItem(ul); 
        publishYear.innerText = "Publicerad: " + yearPublished;

        const addBtn = createPostBtn(); 
        cardBody.append(addBtn);

        

        addBtn.addEventListener('click', async (event) => {
            const chosenBook = {
                title: title,
                author: author,
                isRead: false,
                publishYear: yearPublished,
                score: 0
            };

            // ADD: feature for checking if the book is already in database/user's bookshelf...? 

            try {
                await postBook(chosenBook);
                home.innerHTML = " ";
                renderHome();

            }
            catch (error) {
                console.log(error);
            }
        })



    })

    











}