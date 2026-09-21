import { createScoringForm } from "./createForms.js";
import { renderHome } from "../main.js";
import { createReadBtn, createDeleteBtn } from "./createButtons.js";
import { createList, createListItem, createListItemBold } from "./createListItems.js";
import { manuallyAddBook } from "./manuallyAddBook.js";

const home = document.getElementById('app');

export function createCardBody() {
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

    return cardBody;
}

export async function createBookCard(book) {

    const cardBody = createCardBody();

    const ul = createList(); 
    cardBody.append(ul);

    const title = createListItemBold(ul);
    title.innerText = book.getTitle();

    const author = createListItem(ul);
    author.innerText = "Författare: " + book.getAuthor();

    const publishYear = createListItem(ul);
    publishYear.innerText = "Publicerad: " + book.getPublishYear();

    const score = createListItem(ul);

    if (book.getScore() > 0) {
        score.innerText = "Betyg: " + book.getScore();
    }
    else {
        score.innerText = "Betyg: Inte läst klart än."
    }

    const deleteBtn = createDeleteBtn();
    cardBody.append(deleteBtn);

    deleteBtn.addEventListener('click', async () => {
        try {
            await book.bookDelete();
        }
        catch (error) {
            console.log(error);
        }
        home.innerHTML = " ";
        renderHome();
    })

    if (book.getIsRead() === false) {
        const readBtn = createReadBtn();
        cardBody.append(readBtn);

        readBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            try {
                await book.patchBookRead();
            }
            catch (error) {
                console.log(error);
            }
            // rendering Home anew because we need the code to re-process the if statements in this current build of code
            // ADD: updated code to avoid re-rendering? 
            home.innerHTML = " ";
            renderHome();
        });
    }
    else if(book.getIsRead() === true && book.getScore() === 0) {
        score.innerText = "Läst men inte betygsatt";
        const scoringForm = createScoringForm(cardBody);


        scoringForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(scoringForm);
            const review = parseInt(formData.get('scoreInput'), 10);

            try {
                await book.patchScore(review);
                book.setScore(review);
                scoringForm.remove();
            }
            catch (error) {
                console.log(error);
            }
            score.innerText = "Betyg: " + book.getScore();
        })
    }

} 

export async function createErrorCard() {
    home.innerText = " ";
    const cardBody = createCardBody();
    const text = document.createElement('h2');
    text.innerText = "Inga böcker hittades";
    cardBody.append(text);
    
    manuallyAddBook(); 
}
