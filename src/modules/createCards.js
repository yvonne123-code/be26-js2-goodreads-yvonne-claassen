// imports 
import { createForm } from "./patch.js";


// variables
const app = document.getElementById('app');

// functions 
export async function createCards(book) {


    // createCards 

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    app.append(wrapper);

    const ul = document.createElement('ul');
    wrapper.append(ul);

    const title = document.createElement('li');
    ul.append(title);
    title.innerText = "Titel: " + book.getTitle();

    const author = document.createElement('li');
    ul.append(author);
    author.innerText = "Författare: " + book.getAuthor();

    const publishYear = document.createElement('li');
    ul.append(publishYear);
    publishYear.innerText = "Publicerad: " + book.getPublishYear();

    const score = document.createElement('li');
    ul.append(score);
    if (book.getScore() > 0 ){
        score.innerText = "Betyg: " + book.getScore();
    }
    else {
        score.innerText = "Betyg: Inte läst klart än."
    }

    // buttons
    const deleteBtn = document.createElement('button');
    wrapper.append(deleteBtn);
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Radera";

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
        const form = createForm(wrapper); 
        
        
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


    // if (book.getIsRead() === true && book.getScore() === 0) {

    //     // request to score and send patch
    //     createForm();


    // }
    // else if (book.getIsRead() === false) {
    //     wrapper.append(patchBtn);
    //     patchBtn.classList.add('patch');
    //     patchBtn.innerText = "Markera som läst";

    //     patchBtn.addEventListener('click', async () => {
    //         try {
    //             // console.log("clicked patch");
    //             await book.patchBookRead();

    //             patchBtn.remove();

    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     })

    // }
    // else if (book.getIsRead() === true && book.getScore() != 0) {
    //     // show score 
    //     

    // }


} 
