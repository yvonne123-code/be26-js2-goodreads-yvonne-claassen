import { loadingState } from "../elementCreations/loadingState.js";

export async function searchBooks(searchWord) {

    const home = document.getElementById('app');

    loadingState(); 
    const search = searchWord.title.toLowerCase();


    // ADD: feature for checking that the search word is viable

    const parameters = new URLSearchParams({
        q: search
    });

    try {
        const response = await fetch(`https://openlibrary.org/search.json?${parameters.toString()}`);
        if (!response.ok) {
            throw new Error("could not fetch books this way");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
        // ADD: feature letting the client know that nothing got fetched... ?
    }



}