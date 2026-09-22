JS-GOODREADS - 'DIN VIRTUELLA BOKHYLLA' 

This is a project for the course JavaScript 2 at the Back-End Web Developing course at Grit Academy. 

This project's goal is to create a virtual bookshelf akin to Goodreads 'my bookshelf' feature. The client is meant to be able to post books to a database, 
see all their saved books, patch their status to read=true, and offer a scoring of their book WHEN the book has been read. 

I have done all this, but also added a function for not only posting books manually, but also searching for books using an open source API. The client can then choose a book from 10
search results, or add a book manually. The information will be saved to the database and rendered in their 'bookshelf'. 

The project is for a swedish school, and so the client based side is only in swedish for now


CODE STRUCTURE

- main.js 
    - starts the application and listens for any client based interactions with the website. 
    - the client can search for books, mark their books as read, score read books, and delete books. 

- modules / class /
    - Book.js 
        - the class Book is written here with relevant methods, getters and setters. 

- modules / elementCreations /
    - createButtons.js
        - functions that handle the creation of various buttons
    - createCards.js
        - functions that handle the creation and rendering of various cards 
            - includes a basic card creation function 
            - includes rendering of bookshelf
            - does NOT handle the creation of search result cards. 
    - createForms.js
        - functions that handle the creation of various forms necessary
            - includes manually posting books form
            - includes the API search form
    - createListItems.js
        - functions that handle the creation of various and basic lists and list items
    - createSearchResultCard
        - one function that handles the creation of search result cards (10 of them)
            - placed in a separate file since there are many event listeners and the code got large
    - loadingState.js
        - one function for creating a loading state rendered to the client
        - currently only in use for when the client has searched for books 
    - manuallyAddBook.js
        - renders information on posting books manually together with the form for the client to do so

- modules / databaseCommunications /
    - firebaseRequests.js 
        - handles POST and GET for database communication
    - openLibraryRequests.js
        - handles the fetching of books based on user's search word(s)



RESOURCES / DEPENDENCIES 

- fav icon from bootstrap: 
    - https://icons.getbootstrap.com/icons/book/
- css uses bootstrap installed with node.js
    - https://getbootstrap.com/
- bundled using Vite
- API for searching
    - Open Library's open source API for searching their book database
    - https://openlibrary.org/dev/docs/api/search 
- firebase for free database



FUTURE UPDATES PLANNED: 
    - navbar for going through further functions, returning to home, and viewing only bookshelf
        - viable only when further functions and features are added to the app. 
    - checks on search words being viable or not
        - handles errors and potential empty form results 
    - an error state if the returned books are 0
        - lets the client know there were no books found in a user friendly way 
    - images
        - using the open library API images search to add images to each book in user's search results
        - the same for books in client's 'bookshelf'
    - more books rendered after searching using open source API
        - there are often over 4000 searches returned, rendering more ten 10 is preferable
        - allows for filtering to be updated
    - filtering
        - filter books between read, not read, scored, etc. 
        - filter books in search results of open library API
            - filter according to specific genres, years published, etc (based on .docs information returned from API)
    - database extensions 
        - larger collected information for client to click through on their books
        - viable when adding manually? 
    - function to add more comments and information to each individual books in bookshelf when clicked upon
    - add english language switch 
