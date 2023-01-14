class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {

        // this worked from parent class
        super(title, author, year);

        // this worked from subclass
        this.month = month;
    }
}

// Instantiate Object
const magOne = new Magazine('Mag One', 'Jhon Doe', 2018, 'Jan');

console.log(magOne);
console.log(magOne.getSummary());
