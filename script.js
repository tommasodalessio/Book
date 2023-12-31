// script 
const button = document.querySelector("button");
const library = document.querySelector(".library");
const body = document.querySelector("body");
const books = [];

button.addEventListener('click', e => {
    button.disabled = true;
    newForm();
});

var br = document.createElement("br"); // break line element

function newForm() {
    // create a form dynamically
    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "index.html");

    // Input element for title
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title:";
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "title");
    title.setAttribute("placeholder", "A Game of Thrones");
    title.setAttribute("required", "");

    // Input element for author
    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author:";
    const author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("name", "author");
    author.setAttribute("id", "author");
    author.setAttribute("placeholder", "George R. R. Martin");
    author.setAttribute("required", "");

    // Input element for numberPage
    const numberPageLabel = document.createElement("label");
    numberPageLabel.setAttribute("for", "numberPage");
    numberPageLabel.textContent = "Number of Pages:";
    const numberPage = document.createElement("input");
    numberPage.setAttribute("type", "number");
    numberPage.setAttribute("name", "numberPage");
    numberPage.setAttribute("id", "numberPage");
    numberPage.setAttribute("placeholder", "500");
    numberPage.setAttribute("required", "");

    // Input element for read
    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    readLabel.textContent = "Read:";
    const read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("name", "read");
    read.setAttribute("id", "read");
    read.setAttribute("required", "");

    // Create a submit button
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute("id", "submitButton");

    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "closeButton";

    const container = document.createElement("div");
    container.className = "container";
    form.appendChild(container);

    const buttons = document.createElement("div");
    buttons.className = "buttons"
    form.appendChild(buttons);

    // Append labels and inputs to the form
    container.appendChild(titleLabel);
    container.appendChild(title);
    container.appendChild(br); // Add a line break
    container.appendChild(authorLabel);
    container.appendChild(author);
    container.appendChild(br); // Add a line break
    container.appendChild(numberPageLabel);
    container.appendChild(numberPage);
    container.appendChild(br); // Add a line break
    container.appendChild(readLabel);
    container.appendChild(read);
    container.appendChild(br); // Add a line break
    buttons.appendChild(submitButton);
    buttons.appendChild(closeButton);

    // Append the form to the "library" element
    body.appendChild(form);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        //get the value from the imput 
        const titleValue = title.value;
        const authorValue = author.value;
        const numberPageValue = numberPage.value;
        const readValue = read.checked;

        const book = {
            title: titleValue,
            author: authorValue,
            numberPage: numberPageValue,
            read: readValue
        }

        //adding the book to the library
        books.push(book);

        //form removing 
        form.remove();

        //clear the form fields
        title.value = "";
        author.value = "";
        numberPage.value = "";
        read.checked = false;

        //display the book
        displayBook(book);

        button.disabled = false;
    })

    //taking the query of the botton created 
    const buttonClose = form.querySelector('button')

    buttonClose.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("sono dentro");

        form.remove();
        button.disabled = false;
    })
}

function displayBook(book) {
    // Create a new div to display the book information
    const bookDiv = document.createElement("div");

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = `Title: ${book.title}`;
    bookDiv.appendChild(titleParagraph);

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorParagraph);

    const pagesParagraph = document.createElement("p");
    pagesParagraph.textContent = `Pages: ${book.numberPage}`;
    bookDiv.appendChild(pagesParagraph);

    const readStatus = book.read ? "Yes" : "No";
    const readParagraph = document.createElement("p");
    readParagraph.textContent = `Read: ${readStatus}`;
    bookDiv.appendChild(readParagraph);

    bookDiv.className += "gridElement";
    // Append the book div to the library
    library.appendChild(bookDiv);
}





