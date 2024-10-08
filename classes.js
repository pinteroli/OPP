class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise (newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore () {
        return 'Barnes and Noble';
    }
}

// Instantiate Object
const bookOne = new Book('Book One', 'Jhon Doe', '2013');

console.log(Book.topBookStore());