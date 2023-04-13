const example_1 = [];
const example_2 = ["Peter"];
const example_3 = ["Jacob", "Alex"];
const example_4 = ["Max", "John", "Mark"];
const example_5 = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
    return names.length > 3 ? names.slice(0,2).join(', ') + ' and ' + (names.length-2) + ' others like this'
    : names.length === 3 ? names.slice(0,2).join(', ') + ' and ' + names[2] + ' like this'
    : names.length === 2 ? names.join(' and ') + ' like this'
    : names.length === 1 ? names[0] + ' likes this' : 'no one likes this'
}

console.log(likes(example_1));
console.log(likes(example_2));
console.log(likes(example_3));
console.log(likes(example_4));
console.log(likes(example_5));