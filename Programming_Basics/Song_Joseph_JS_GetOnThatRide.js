var height = 42; //min height
var age = 10; //min age
var rider_height = parseInt(prompt("Enter your height: ")); //user height input
var rider_age = parseInt(prompt("Enter your age: ")); //user age input

//function to check height AND age
function check_rider_feature1(rider_height,rider_age){
    if (rider_height >= height && rider_age >= age){
        console.log("Get on that ride, kiddo");
    }
    else {
        console.log("Sorry kiddo. Maybe next year");
    }
}

//function to check height OR age
function check_rider_feature2(rider_height,rider_age) {
    if (rider_height >= height || rider_age >= age){
        console.log("Get on that ride, kiddo");
    }
    else {
        console.log("Sorry kiddo. Maybe next year");
    }
}