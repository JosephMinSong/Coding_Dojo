/* I want a latte if it's before 10 am
I want a hot chocolate if it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep! */

/* (Feature 2) Building off Feature 1, I want to adjust the current conditions 
and add a new option so that if the time is between 3 pm - 6 pm, I 
want to have it pick either ice cream or hot chocolate depending on if 
the time is even or odd. */

/* (Feature 3) Building off Feature 2, I want my options for the 3 pm - 6 pm slot 
to be a random selection: if the time is even, I want my selections to 
be ice cream, cookies, or candy. If the time is odd, I want my selections 
to be hot chocolate, tea, or cake. */

var completedHomework; //did the user complete their homework
var timeOfDay; //user input the time in military time
var day; //user input the day of the week (feature 1)
var list1 = ['ice cream', 'cookies', 'candy']; //feature 3
var list2 = ['hot chocolate', 'tea', 'cake']; //feature 3
var randomNumber = getRandomInt(0,2)
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if (completedHomework == true){
    if (timeOfDay<1000){
        console.log("Let's get a latte");
    } if (timeOfDay>=1000 && timeOfDay<1500){
        console.log("Let's get some hot chocolate");
    } if (timeOfDay>=1500 && timeOfDay<1800){
        if (timeOfDay%2 == 1){ //feature 2 - if the time is odd, we get hot chocolate. if it's even, we get ice cream
            //feature 3 - if the time is even, we pick a random element in list 1. if the time is odd, we pick a random element in list 2
            console.log("Let's get " + list1[randomNumber]);
        } else {
            console.log("Let's get " + list2[randomNumber]);
        }
    } if (timeOfDay>=1800 && timeOfDay<2200){
        if (day = "Wednesday"){ //feature 1 - if it's Wednesday, we get strawberry ice cream
            console.log("Let's get some strawberry ice cream");
        } else {
            console.log("Let's get some vanilla ice cream")
        }
    } if (timeOfDay>=2200){
        console.log("Let's go to sleep");
    }
else {
    console.log("Go do your homework!");
}
}
