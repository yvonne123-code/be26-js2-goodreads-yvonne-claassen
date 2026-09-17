// import 

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