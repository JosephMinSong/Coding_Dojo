const example_1 = 'the-stealth-warrior';
const example_2 = 'The_Stealth_Warrior';
const example_3 = 'The_Stealth-Warrior';

function toCamelCase(str) {
    var newStr = '';
    var str_array = str.split('');
    for (var i=0; i < str_array.length; i++){
        if (str_array[i] === '-' || str_array[i] === '_'){
            var nextCapitalLetter = str_array[i+1].toUpperCase();
            newStr += nextCapitalLetter;
            i++;
        } else {
            newStr += str_array[i];
        }
    }
    return newStr;
}

console.log(toCamelCase(example_1));
console.log(toCamelCase(example_2));
console.log(toCamelCase(example_3));

