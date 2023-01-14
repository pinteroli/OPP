/* object.method */

const bookOne = {
    title: 'Book One',
    author: 'Jhon Doe',
    year: 2013,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const bookTwo = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: 2016,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(bookOne.getSummary());
console.log(Object.values(bookOne));
console.log(Object.keys(bookOne));
console.log(bookTwo);