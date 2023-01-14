let valueType;

/* String */
let valueString = 'This a string';
valueType = typeof valueString;

/* Number */
let valueNumber = 12;
valueType = typeof valueNumber;

/* Array */
let valueArray = [123, 564, 786];
valueType = typeof valueArray;

/* Object */
let valueObject = {
    color: 'blue', // -> string
    size: 'large', // -> string
    type: 'shirt', // -> string
    numbers: [34, 45, 56], // array
    shop: { // -> object
        address: 'Elm Street',
        number: 12,
        postNumber: 2342
    }
};
valueType2 = typeof valueObject;

document.write(valueObject.type.fontcolor('red'));

'hello world'.toUpperCase();