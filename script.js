const card = document.querySelector('.card');
const para = document.createElement('p');
const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById('modal')
const closeBtn = document.querySelector('.close');
const addBook = document.querySelector('.add-book');
const mainCont = document.getElementById('main-container');

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
    myLib = newBook.displayObj().split(', ');
    newElements();
    closeModal();
}

function openModal(){
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        if(inputs[i].type == 'checkbox'){
            inputs[i].checked = false;
        }
    }
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function newElements(){
    const newCard = document.createElement('div');
    const newPara = document.createElement('p');
    const delBtn = document.createElement('button')
    newCard.className = 'card';
    mainCont.appendChild(newCard);
    for(const lib of myLib){
        newPara.textContent += lib + '\n';
    }
    newCard.appendChild(newPara);
    delBtn.innerHTML = 'Delete Book';
    delBtn.className = 'delete-book';
    newCard.appendChild(delBtn);

    delBtn.onclick = function(){
        newCard.setAttribute('id','remove');
        let delDiv = document.getElementById('remove');
        delDiv.remove();
    }
}

addBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

addBook.addEventListener('click', addBookToLibrary)