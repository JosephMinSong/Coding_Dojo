function greeting(name, time_of_day) {
    if (time_of_day == "Morning") {
        if (name == "Count_Dooku") {
            console.log("I'm coming for you, Dooku!");
        }
        else {
            console.log("Good morning " + name)
        }
    } else {
        if (name == "Count Dooku") {
            console.log("I'm coming for you, Dooku!");
        } else {
            console.log("Good evening " + name)
        }
    }
}

greeting("Joe", "Evening")
greeting("Joe", "Morning")