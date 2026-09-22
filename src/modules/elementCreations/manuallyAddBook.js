import { createManualForm } from "./createForms.js";
import { createCardBody } from "./createCards.js";
import { postBook } from "../databaseCommunications/firebaseRequests.js";
import { renderHome } from "../../main.js";

const home = document.getElementById('app');

export function manuallyAddBook() {
    const cardBody = createCardBody(); 

    const info = document.createElement('h2');
    info.innerText = "Hittade du inte boken du letade efter?"
    cardBody.append(info);

    const furtherInfo = document.createElement('p');
    furtherInfo.innerText = "Du kan prova att söka igen eller lägga till boken manuellt nedan!";
    cardBody.append(furtherInfo);

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