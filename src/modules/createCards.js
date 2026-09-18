// imports 
import { Book } from "./Book.js";

// variables
const app = document.getElementById('app');
// functions 
export async function createCards(book){
    // tests
    // console.log("createCards function")
    console.log(book);
    const testString = "test";
    // const testWrapper = document.createElement("h1");
    // app.append(testWrapper);
    // testWrapper.innerHTML = testString; 

    // createCards 
    const wrapper = document.createElement('div');
    app.append(wrapper);

    const ul = document.createElement('ul');
    wrapper.append(ul);

    const title = document.createElement('li');
    ul.append(title);
    title.innerText = book.getTitle(); 

    const author = document.createElement('li');
    ul.append(author);
    author.innerText = book.getAuthor(); 

    const publishYear = document.createElement('li');
    ul.append(publishYear);
    publishYear.innerText = book.getPublishYear(); 

    const deleteBtn = document.createElement('button');
    wrapper.append(deleteBtn);
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Radera";

    deleteBtn.addEventListener('click', async () =>{
        try{
            // console.log("clicked delete")
            await book.bookDelete();
            wrapper.remove(); 

        }
        catch(error){
            console.log(error); 
        }
    })

    const patchBtn = document.createElement('button');
    wrapper.append(patchBtn);
    patchBtn.classList.add('patch');
    patchBtn.innerText = "Markera som läst";

    patchBtn.addEventListener('click', async () =>{
        try{
            console.log("clicked patch");


        }
        catch(error){
            console.log(error);
        }
    })

} 
