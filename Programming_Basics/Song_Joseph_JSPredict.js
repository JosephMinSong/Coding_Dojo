function myBirthyearFunc(){
    console.log("I was born in " + 1980);
}
myBirthyearFunc();//prints out "I was born in 1980"

function myBirthyearFunc(birthYearInput){
    console.log("I was born in" + " " + birthYearInput);
}
myBirthyearFunc(1980);//prints out "I was born in 1980"

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1)
    console.log("num2 is: " + num2)
    var sum = num1 + num2;
    console.log(sum);
}
add(10,20);//prints 30