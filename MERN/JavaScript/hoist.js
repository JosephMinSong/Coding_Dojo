// 1
// GIVEN
/* 
console.log(hello);                                   
var hello = 'world';                                 
*/

var hello;
console.log(hello) //undefined
hello = 'world'

// 2
// GIVEN
/* 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}                          
*/

var needle = 'haystack'
function test(){
    var needle = 'magnet'
    console.log(needle)
}
test() //magnet


// 3
// GIVEN
/* 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);                         
*/

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //super cool

// 4
// GIVEN
/* 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}                         
*/

var food = 'chicken';
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food) //chicken
eat(); //half-chicken


// 5
// GIVEN
/* 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);                 
*/

var mean;
mean(); //mean is not a function
console.log(food) //food is not defined
var mean = function() {
    var food
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food) //food is not defined


// 6
// GIVEN
/* 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);           
*/

var genre;
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre) //undefined
genre = "disco"
rewind() //rock, r&b
console.log(genre) //disco

// 7
// GIVEN
/* 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);           
*/

dojo = "san jose"
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo)
    dojo = "burbank"
    console.log(dojo)
}
console.log(dojo) //san jose
learn() //seattle, burbank
console.log(dojo) //san jose

// 8
// GIVEN
/* 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}        
*/

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65)); //{'name' : Chicago, 'students' : 65, 'hiring' : true}
console.log(makeDojo("Berkeley", 0)); //const is immutable - cannot change dojo into string from dictionary