// import 
import { baseURL } from "./firebaserequests.js";

export class Book {
    #firebaseID;
    #title; 
    #author; 
    #publishYear; 
    #isRead; 
    #score; 

    constructor(firebaseID, title, author, publishYear, isRead, score){
        this.#firebaseID = firebaseID; 
        this.#title = title;
        this.#author = author;
        this.#publishYear = publishYear; 
        this.#isRead = isRead; 
        this.#score = score; 
    }
    // methods
    async bookDelete(){
        const options = {
            method: 'DELETE'
        };

        try {
            const response = await fetch(`${baseURL}/${this.#firebaseID}.json`, options);
            if(!response.ok){
                throw new Error("deletion of book did not work")
            }
            const data = await response.json(); 
            return 'task deleted!'; 

        }
        catch(error){
            console.log(error + "this comes from Book - deleteBook()"); 
        }
    }
    // getters
    getFirebaseID(){
        return this.#firebaseID;
    }
    getTitle(){
        return this.#title; 

    }
    getAuthor(){
        return this.#author; 
    }
    getPublishYear(){
        return this.#publishYear;
    }
    getIsRead(){
        return this.#isRead;
    }
    getScore(){
        return this.#score; 
    }
}