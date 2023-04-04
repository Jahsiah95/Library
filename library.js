let library = [];

function Book(title, author, check, remove) {
    this.title = title;
    this.author = author;
    this.check = check;
    this.remove = remove;
};

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const submit = document.querySelector('.add-book');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const body = document.querySelector('body');
const cb = document.querySelectorAll('#check')


submit.addEventListener('click', addBook);

function addBook() {
    let title = document.createElement('td');
    title.setAttribute('id',`${bookTitle.value}`)
    title.innerHTML = bookTitle.value;

    let author = document.createElement('td');
    author.innerHTML = bookAuthor.value;

    let check = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.setAttribute('id', 'check');
    checkbox.addEventListener('click', bookRead);
    check.appendChild(checkbox);

    let remove = document.createElement('td');
    let button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => {
        for(let property in book){
            book[property].setAttribute('id','delete');
        }
        removeBook();
    });
    remove.appendChild(button);

    let book = new Book(title, author, check, remove);
    library.push(book);
    console.log(library);
    addToLibrary(book);
};

function addToLibrary(book) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let property in book){
        tr.appendChild(book[property]);
    }
};



function bookRead(){
    for(let i = 0; i < library.length; i++){
        let status = library[i]['check'].querySelector('#check');
        if(status.checked != true){
            for(let property in library[i]){
            library[i][property].style.background = 'white';                
            }
        } else{
            for(let property in library[i]){
                library[i][property].style.background = 'green'
            }
        }
    }
}

function removeBook(){
    for(let i = 0; i < library.length; i++){
        let status = library[i]['remove'].getAttribute('id');
        if(status === 'delete'){
            library.splice(i,1);
            console.log(library)
        }
        const deleted = document.querySelectorAll('#delete');
        deleted.forEach((element) => element.remove())
    }
    // library.forEach((book) => {
    //     console.log(book['remove'].getAttribute('id'));
    //     if(book['remove'].getAttribute('id') === 'delete'){
    //         library.splice(book,1)
    //         console.log(library)
    //     }
    // });
};

