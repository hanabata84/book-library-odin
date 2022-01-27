const card = document.querySelector('.card');
const para = document.createElement('p');
const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById('modal')
const closeBtn = document.querySelector('.close');
const addBook = document.querySelector('.add-book');
const mainCont = document.getElementById('main-container');

const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);

function Book(title, author, pagesNo, readOrNot){
    this.title = title;
    this.author = author;
    this.pagesNo = pagesNo;
    this.readOrNot = readOrNot;
}

Book.prototype.displayObj = function() {
    return `${this.title}, Author: ${this.author}, No. of Pages: ${this.pagesNo}, ${this.readOrNot}`;
}

let myLib = [];
myLib = book.displayObj().split(', ');
displayBooks();

function displayBooks(){
    const titleHead = document.createElement('h2');
    const toggle = document.createElement('div');
    toggle.className = 'toggle';
    titleHead.textContent = myLib[0];
    para.textContent = myLib[1] + '\n' + myLib[2] + '\n';
    card.appendChild(titleHead);
    card.appendChild(para);
    card.appendChild(toggle);

    const labelRead = document.createElement('label');
    labelRead.textContent = 'Read';

    toggle.appendChild(labelRead);

    const labelSwitch = document.createElement('label');
    labelSwitch.className = 'switch';

    toggle.appendChild(labelSwitch);

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox');

    labelSwitch.appendChild(checkBox);

    const slider = document.createElement('span');
    slider.className = 'slider';

    labelSwitch.appendChild(slider);

    if(myLib[3] === 'true'){
        checkBox.checked = true;
    }else{
        checkBox.checked = false;
    }
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
    let modalCheck = document.getElementById('readOrNot');
    
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        if(inputs[i].type == 'checkbox' && modalCheck.name === 'readOrNot'){
            modalCheck.checked = false;
        }
    }
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function newElements(){
    const newCard = document.createElement('div');
    const newHead = document.createElement('h2');
    const newPara = document.createElement('p');
    const delBtn = document.createElement('button')
    newCard.className = 'card';
    mainCont.appendChild(newCard);
    newHead.textContent = myLib[0];
    
    newPara.textContent = myLib[1] + '\n' + myLib[2] + '\n';
    
    newCard.appendChild(newHead);
    newCard.appendChild(newPara);

    const toggle = document.createElement('div');
    toggle.className = 'toggle';

    newCard.appendChild(toggle);

    const labelRead = document.createElement('label');
    labelRead.textContent = 'Read';

    toggle.appendChild(labelRead);

    const labelSwitch = document.createElement('label');
    labelSwitch.className = 'switch';

    toggle.appendChild(labelSwitch);

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox');

    labelSwitch.appendChild(checkBox);

    const slider = document.createElement('span');
    slider.className = 'slider';

    labelSwitch.appendChild(slider);

    if(myLib[3] === 'true'){
        checkBox.checked = true;
    }else{
        checkBox.checked = false;
    }
    
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