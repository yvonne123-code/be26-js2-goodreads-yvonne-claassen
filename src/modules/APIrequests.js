export async function searchBooks(searchWord) {

    const home = document.getElementById('app');

    // loading state 
    home.innerText = " ";
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
    app.append(card);

    const wrapper = document.createElement('div');
    wrapper.classList.add('card', 'h-100', 'shadow-sm', 'text-center');
    card.append(wrapper);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'p-2');
    cardBody.innerText = "Laddar böcker...";
    wrapper.append(cardBody);
    console.log(searchWord);

    // API fetch search word creation
    const search = searchWord.title;
    // console.log(search);

    // ADD: feature for checking that the search word is viable

    const parameters = new URLSearchParams({
        q: search
    });

    // console.log(parameters.toString());
    // API fetch
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