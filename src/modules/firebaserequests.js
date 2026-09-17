// import

// variables
const baseURL = "https://gritacademy-yvonne-default-rtdb.europe-west1.firebasedatabase.app/goodreads";

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