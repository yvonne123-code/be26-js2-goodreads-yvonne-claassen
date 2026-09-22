// import 
import { baseURL } from "./firebaseRequests.js";

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
    async patchBookRead() {
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ isRead: !this.#isRead }), 
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(`${baseURL}/${this.#firebaseID}.json`, options);
            if(!response.ok){
                throw new Error("patching of book did not work")
            }
            const data = await response.json(); 
            return 'task patched!'; 

        }
        catch(error){
            console.log(error + "this comes from Book - patchBookRead()"); 
        }

        
    }
    async patchScore(number){
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ score: number }), 
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(`${baseURL}/${this.#firebaseID}.json`, options);
            if(!response.ok){
                throw new Error("patching of book's score did not work")
            }
            const data = await response.json(); 
            return 'score patched!'; 

        }
        catch(error){
            console.log(error + "this comes from Book - patchScore()"); 
        }

        this.#score = score; 


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
    // setters
    setScore(number){
        if(number < 0 || number > 10){
            return error; 
        }
        else{
            this.#score = number; 
            return true; 
        }
        

    }
}