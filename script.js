// script 

const myLibrary = [
    new Book('a', 'b', 'c', 'd')
];

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let newBook = new Book()
    myLibrary.push(newBook);
}

