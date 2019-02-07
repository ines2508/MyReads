# Start 

To start the project open terminal and write:
yarn start

# API

The aim of this project is to show the books from API and select them on the right shelf.

There are four shelves to choose from: Currently Reading, Want to Read, Read and none. 

The displaying of the books from API is error free since the default values are attached to book objects and input validation is present.

# Screens 

The project consists of two screens. 
The React Router DOM is used to switch between the screens thanks to two buttons. One with the green plus at the bottom of the page on MyReads and the arrow near the input in Search.

## MY READS screen 

First screen shows My Reads with the shelves on which the user can move the book.

Updating the content is via componentDidMount with the BookAPI.getAll defined in App.js and with the event onChange attached to selected lists with green arrow in BookShelfChanger.js


### Shelves

The shelves are defined in the array in ListShelves.js so it is easy to add or remove the shelf without jumping throw the project to update it.

Only the "None" shelf has the default value of hide in MyReads.

If the shelf is empty it will not be displayed in MyReads but the user can easily add the book to it.

### Move the Book

To move the book user needs to click the arrow. After clicking, the lists of shelves show up. 

After choosing the shelf the function moveBook is invoked. This function update the API with the new Shelf position and return all books with getAll.


## SEARCH screen

The input collects the query with trimming them at the start of the line so there are no errors.

### Show the results

The results are display only when the input is not empty and the update to API function return not empty array.

Displaying the results is made by function searchBook which update the state of array searchList and showResult. 

Showing the results is based on reuse the code from MyReads for Shelf and Book.

The books from Search API don't have the key-value pair for the shelf so they get default value as "none" and only the books which are in BooksAPI.getAll get their own data.

### Keywords to search

Keywords to search are gathered in SEARCH_TERMS.md


