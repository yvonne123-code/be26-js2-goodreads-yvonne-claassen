// variables
export const baseURL = "https://gritacademy-yvonne-default-rtdb.europe-west1.firebasedatabase.app/goodreads";

// functions 
export async function getAllBooks(){
    // test
    // console.log("getAllBooks function")

    // GET 
    try {
        const response = await fetch (`${baseURL}.json`);
        if(!response.ok){
            throw new Error("the fetch of your database in getAllBooks() did not work");
        }

        const books = await response.json(); 
        return books; 

    }
    catch(error){
        throw error; 
    }
    
}
// POST
export async function postBook(obj){
    const options = {
        method: 'POST',
        body: JSON.stringify({title: obj.title, author: obj.author, publishYear: obj.publishYear, isRead: false, score: 0 }),
        headers: {
            'Content-type': 'application/json'
        } 
    }

    try {
        const response = await fetch (`${baseURL}.json`, options);
        if(!response.ok){
            throw new Error("the posting of your book in postBook() did not work");
        }

        const data = await response.json(); 
        return data; 

    }
    catch(error){
        throw error; 
    }
}