import {createCardBody } from "./createCards.js";

export function loadingState(){
    const home = document.getElementById('app')
    home.innerText = " ";

    const cardBody = createCardBody(); 
    cardBody.innerText = "Laddar böcker...";

    return cardBody; 
    
}