// imports
import { renderHome } from "../main.js";
import { createManualForm } from "./createForm.js";
import { postBook } from "./firebaserequests.js";


// variables 
const home = document.getElementById('app');

// functions
export function createSearchCards(books) {
    // book(s) found
    home.innerText = " ";

    // only ten cards/books for now
    const tenBooks = books.docs.slice(0, 10);

    tenBooks.forEach(result => {
        const title = result.title;
        const author = result.author_name;
        const yearPublished = result.first_publish_year;

        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
        home.append(card);

        const wrapper = document.createElement('div');
        wrapper.classList.add('card', 'h-100', 'shadow-sm', 'text-center');
        card.append(wrapper);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'p-2');
        wrapper.append(cardBody);

        const ul = document.createElement('ul');
        ul.classList.add('list-group', 'list-group-flush', 'mb-3', 'text-center');
        cardBody.append(ul);

        const bookTitle = document.createElement('li');
        bookTitle.classList.add('list-group-item', 'fw-bold');
        ul.append(bookTitle);
        bookTitle.innerText = title;

        const bookAuthor = document.createElement('li');
        bookAuthor.classList.add('list-group-item', 'text-muted');
        ul.append(bookAuthor);
        bookAuthor.innerText = "Författare: " + author;

        const publishYear = document.createElement('li');
        publishYear.classList.add('list-group-item', 'text-muted');
        ul.append(publishYear);
        publishYear.innerText = "Publicerad: " + yearPublished;

        const addBtn = document.createElement('button');
        addBtn.innerText = "Lägg till i din lista";
        addBtn.classList.add('patch');
        cardBody.append(addBtn);

        // post using button for found book

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

    // client doesn't find a book they want to add to their bookshelf
    const newDiv = document.createElement('div');
    newDiv.classList.add('row', 'justify-content-center');
    home.append(newDiv);

    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
    newDiv.append(card);

    const wrapper = document.createElement('div');
    wrapper.classList.add('card', 'h-100', 'shadow-sm', 'text-center');
    card.append(wrapper);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'p-2');
    wrapper.append(cardBody);

    const info = document.createElement('h2');
    info.innerText = "Hittade du inte boken du letade efter?"
    cardBody.append(info);
    const furtherInfo = document.createElement('p');
    furtherInfo.innerText = "Du kan prova att söka igen eller lägga till boken manuellt nedan!";
    cardBody.append(furtherInfo);

    // form for manual adding of book 

    const manualForm = createManualForm();
    cardBody.append(manualForm);

    manualForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const formData = new FormData(manualForm);
        const formObj = Object.fromEntries(formData.entries());

        try {
            await postBook(formObj);

        }
        catch (error) {
            console.log(error);
        }

        home.innerHTML = "";
        renderHome();
    })











}