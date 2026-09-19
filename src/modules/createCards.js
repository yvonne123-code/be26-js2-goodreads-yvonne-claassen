// imports 
import { createForm } from "./createForm.js";


// variables
const app = document.getElementById('app');

// functions 
export async function createCards(book) {


    // createCards 

    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
    app.append(card);

    const wrapper = document.createElement('div');
    wrapper.classList.add('card', 'h-100', 'shadow-sm', 'text-center');
    card.append(wrapper);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'p-2');
    wrapper.append(cardBody);

    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush', 'mb-3', 'text-center');
    cardBody.append(ul);

    const title = document.createElement('li');
    title.classList.add('list-group-item', 'fw-bold');
    ul.append(title);
    title.innerText = "Titel: " + book.getTitle();

    const author = document.createElement('li');
    author.classList.add('list-group-item', 'text-muted');
    ul.append(author);
    author.innerText = "Författare: " + book.getAuthor();

    const publishYear = document.createElement('li');
    publishYear.classList.add('list-group-item', 'text-muted');
    ul.append(publishYear);
    publishYear.innerText = "Publicerad: " + book.getPublishYear();

    const score = document.createElement('li');
    score.classList.add('list-group-item', 'text-muted');
    ul.append(score);

    if (book.getScore() > 0 ){
        score.innerText = "Betyg: " + book.getScore();
    }
    else {
        score.innerText = "Betyg: Inte läst klart än."
    }

    // buttons
    const deleteBtn = document.createElement('button');
    cardBody.append(deleteBtn);
    deleteBtn.classList.add('delete', 'd-block', 'mx-auto');
    deleteBtn.innerText = "Radera Bok";

    deleteBtn.addEventListener('click', async () => {
        try {
            // console.log("clicked delete")
            await book.bookDelete();
            wrapper.remove();

        }
        catch (error) {
            console.log(error);
        }
    })
    if(book.getIsRead() === false){
        const form = createForm(cardBody); 
        
        
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); 

            const formData = new FormData(form);
            const review = parseInt(formData.get('scoreInput'), 10);

            try {
                await book.patchBookRead(); 
                await book.patchScore(review);
                book.setScore(review);

                form.remove(); 
                

            }
            catch(error){
                console.log(error);
            }

            score.innerText = "Betyg: " + book.getScore(); 
            
        } )
    }

    

} 
