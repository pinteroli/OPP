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

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
}

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object
const bookOne = new Book('Book One', 'Jhon Doe', 2013);
const bookTwo = new Book('Book Two', 'Jane Doe', 2016);

console.log(bookTwo.year);
bookTwo.revise(2018);
console.log(bookTwo.year);