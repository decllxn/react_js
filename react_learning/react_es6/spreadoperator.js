// The Javascript spread operator(...) Allows us to quickly copy all or part of an existing array or object inot anothe rarray or object

// Example
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = [...numbers, 6, 7, 8];
// Copis numbers to double numbers


// Assign the first and second items from numbers to variables and put the rest in an array
const numbers1 = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = numbers1;
// first = 1, second = 2, rest = [3, 4, 5, 6]


// We can use the spread operator on objects too

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    ...myVehicle,
    year: 2020
}

// updated Vehicle contains everything myVehicle contains