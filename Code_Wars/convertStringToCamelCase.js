const example_1 = 'the-stealth-warrior';
const example_2 = 'The_Stealth_Warrior';
const example_3 = 'The_Stealth-Warrior';

function toCamelCase(str) {
    var newStr = '';
    // var str_array = str.split('');
    for (var i=0; i < str.length; i++){
        if (str[i] === '-' || str[i] === '_'){
            var nextCapitalLetter = str[i+1].toUpperCase();
            newStr += nextCapitalLetter;
            i++;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(toCamelCase(example_1));
console.log(toCamelCase(example_2));
console.log(toCamelCase(example_3));

