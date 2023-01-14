// constructor basicly is a function
function Book(title, author, year) {
    //console.log('Book Initialized..');

    this.title = title;
    this.author = author;
    this.year = year;

    function getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instatiate an Object
const bookOne = new Book('Book One', 'Jhon Doe', 2013);
const bookTwo = new Book('Book Two', 'Jane Doe', 2016);

console.log(bookOne);
console.log(bookTwo);