const myLibrary=[];

function book(title,author,pages, read = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(this.read === true)
            return `The ${this.title} by ${this.author}, ${this.pages}, has been read`;
        else
            return `The ${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
}

function addBookToLibrary(title,author,pages,read = false){
    myLibrary.push(new book(title,author,pages,read));
}

function displayLibrary(){
    
    myLibrary.forEach(function (book) {
        console.log(book.info());
    });
}

const dialog =document.querySelector("dialog");
const addBook = document.querySelector(".add");
const submit = document.querySelector(".submit");
addBook.addEventListener("click", ()=>{
    dialog.showModal();
})

submit.addEventListener("submit", (event)=>{
    event.preventDefault();
})
// addBook.addEventListener("click", ()=>{
//     var container = document.querySelector(".container");

//     var newBook = document.createElement("form");
//     newBook.setAttribute("method", "get");
//     newBook.setAttribute("class", "newBook")

//     var  title = document.createElement("input");
//     title.setAttribute("class", "title");
//     title.setAttribute("type", "text");
//     title.setAttribute("name", "BookName");
//     title.setAttribute("placeholder", "Book Name");

//     var author = document.createElement("input");
//     author.setAttribute("class", "author");
//     author.setAttribute("type","text");
//     author.setAttribute("name","author");
//     author.setAttribute("placeholder","Author");

//     var pages = document.createElement("input");
//     pages.setAttribute("class", "pages")
//     pages.setAttribute("type","number");
//     pages.setAttribute("name","pages");
//     pages.setAttribute("placeholder","Pages");
    
//     var submit = document.createElement("button");
//     submit.setAttribute("type", "submit");
//     submit.innerText = "Submit";
    
//     var read = document.createElement("input")
//     read.setAttribute("value", "Read")
//     read.setAttribute("type","checkbox");
//     var readLabel = document.createElement("label");
//     readLabel.innerText = "Read";
    
    
//     var notRead = document.createElement("input")
//     notRead.setAttribute("value", "Not-Read");
//     notRead.setAttribute("type", "checkbox");
//     notRead.innerText = "Not Read";

//     newBook.appendChild(title);
//     newBook.appendChild(author);
//     newBook.appendChild(pages);
//     newBook.appendChild(submit);
//     newBook.appendChild(read);
//     newBook.appendChild(readLabel);
//     newBook.appendChild(notRead);
//     newBook.addEventListener("submit", function(event){
//         title = document.querySelector(".title").value;
//         author = document.querySelector(".author").value;
//         pages = document.querySelector(".pages").value;
//         addBookToLibrary(title,author,pages)
//         event.preventDefault();
//     })

//     container.appendChild(newBook);



// })



// addBookToLibrary("LOTR","J.K.Tolken",400,true);
// addBookToLibrary("Harry Potter", "J.J.Smells",500,false);
// addBookToLibrary("Words Of Radiance", "Brandon Sanderson", 1000, true);
// displayLibrary();