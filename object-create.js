// Object Of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
};

// Create Object
// const bookOne = Object.create(bookProtos);
// bookOne.title = 'Book One';
// bookOne.author = 'Jhon Doe';
// bookOne.year = 2013;

const bookOne = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'Jhon Doe' },
    year: { value: 2013 }
});