const myLibrary=[];

function book(title,author,pages, read = "Not Read"){
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
    this.toggle = function(){
        if(this.read === "Not Read"){
            this.read = "Read";
        }
        else
            this.read = "Not Read";
    }
}

function addBookToLibrary(title,author,pages,read = "Not Read"){
    myLibrary.push(new book(title,author,pages,read));
}

function displayLibrary(){
    myLibrary.forEach(function (book) {
        console.log(book.info());
    });
}

const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add");
const submit = document.querySelector(".submit");
const close = document.querySelector(".close");
addBook.addEventListener("click", ()=>{
    dialog.showModal();
})

submit.addEventListener("click", (event)=>{
    var title = document.querySelector(".title").value;
    var author = document.querySelector(".author").value;
    var pages = document.querySelector(".pages").value;
    var read = document.querySelector(".read").value;
    if(read ==="Read"){
        addBookToLibrary(title,author,pages,true);
    }
    else{
        addBookToLibrary(title,author,pages);
    }
    addBookHtml(title,author,pages,read);
    event.preventDefault();
    dialog.close();
    
})

close.addEventListener("click", ()=>{
    dialog.close();
})

function addBookHtml(title,author,pages,read, index = myLibrary.length){

    const display = document.querySelector(".library");
    const book = document.createElement("div");
    book.setAttribute("class","book");
    book.setAttribute("id", `${index}`)

    const bookTitle = document.createElement("div")
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRead = document.createElement("div");
    bookRead.setAttribute("id", `book ${index}`);

    const readToggle = document.createElement("Button");
    readToggle.setAttribute("class","toggle");
    readToggle.innerText ="Read toggle";
    
    readToggle.addEventListener("click",()=>{
        myLibrary[bookFind(title)].toggle();
        const targetedBook = document.getElementById(`book ${index}`);
        targetedBook.innerText = myLibrary[bookFind(title)].read;
    })

    const remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerText = "Remove Book";

    remove.addEventListener("click", ()=>{
        myLibrary.splice(bookFind(title),1);
        const targetedBook = document.getElementById(index);
        targetedBook.remove();
    });

    bookTitle.innerText = title;
    bookAuthor.innerText = author;
    bookPages.innerText = pages;
    bookRead.innerText = read;

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(bookRead);
    book.appendChild(readToggle);
    book.appendChild(remove);
    

    display.appendChild(book);
}

function bookFind(book){
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title === book){
            return i;
        }
    }
}


 addBookToLibrary("LOTR","J.K.Tolken",400,"Read");
 addBookToLibrary("Harry Potter", "J.J.Smells",500,"Read");
 addBookToLibrary("Words Of Radiance", "Brandon Sanderson", 1000);
 for(let i = 0; i < myLibrary.length; i++){
    addBookHtml(myLibrary[i].title,myLibrary[i].author,myLibrary[i].pages,myLibrary[i].read,i);
 }




// displayLibrary();

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