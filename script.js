const card = document.querySelector('.card');
const para = document.createElement('p');
const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById('modal')

const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

function Book(title, author, pagesNo, readOrNot){
    this.title = title;
    this.author = author;
    this.pagesNo = pagesNo;
    this.readOrNot = readOrNot;
}

Book.prototype.displayObj = function() {
    return `Title: ${this.title}, Author: ${this.author}, No. of Pages: ${this.pagesNo}, Read: ${this.readOrNot}`;
}

let myLib = [];
myLib = book.displayObj().split(', ');
displayBooks();

function displayBooks(){
    for(const lib of myLib){
        para.textContent += lib + '\n';
    }
    card.appendChild(para);
}

function addBookToLibrary() {
    const titleTxt = document.getElementById('title').value;
    const authorTxt = document.getElementById('author').value;
    const pagesNoTxt = document.getElementById('pagesNo').value;
    const readOrNotTxt = document.getElementById('readOrNot').checked;
    const newBook = new Book(titleTxt, authorTxt, pagesNoTxt, readOrNotTxt);
    myLib.push(newBook);
    para.textContent = '';
    displayBooks();
}

function test(){
    modal.style.display = 'block';
}

addBtn.addEventListener('click', test);