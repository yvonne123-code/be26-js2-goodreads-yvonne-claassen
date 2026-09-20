export async function searchBooks(searchWord) {

    console.log(searchWord);
    const search = searchWord.title; 
    console.log(search);

    const parameters = new URLSearchParams({
        q: search
    });

    console.log(parameters.toString());

    try{
        const response = await fetch(`https://openlibrary.org/search.json?${parameters.toString()}`);
        if(!response.ok){
            throw new Error("could not fetch books this way");
        }
        const data = await response.json(); 
        

    }
    catch(error){
        console.log(error);
    }

    return data; 

}