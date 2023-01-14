// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazine Costructior
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const magOne = new Magazine('Mag One', 'Jhon Doe', 2018, 'Jan');

// Use Magazin Constructor
Magazine.prototype.constructor = Magazine;

console.log(magOne);