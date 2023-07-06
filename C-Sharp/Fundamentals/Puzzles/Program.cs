// We've likely all flipped a coin at least once in our lives when trying to decide on this or that. 
// Flipping a coin in person is easy. 
// But how would you write your own coin flip function? Write a function that returns "heads" or "tails" depending on the result you get.

static void CoinFlip(){
    Random rand = new Random();

    var randomNum = rand.Next(1,3);

    if (randomNum == 1){
        Console.WriteLine("Heads");
    } else {
        Console.WriteLine("Tails");
    }
}

// Once you have figured out coin flip, take your learning to the next level by creating a dice roller. 
// Once again, think about what it is like to roll a die in real life. How could you replicate those actions in code?
// Bonus: Can you rewrite your function to accept a parameter for the number of sides so you can roll any number-sided die?

static List<int> DiceRoll(int Max, int Rolls){
    Random rand = new Random();

    var result = new List<int>();

    for (int i = 0; i < Rolls; i++){
        result.Add(rand.Next(1, Max + 1));
    }

    return result;
}

// Once you have your dice roller all worked out,
// write a new function that will roll your dice 4 times and returns a List of those 4 results. 
// You can write your function to hard-code 4 dice rolls.

// Bonus: Write your function to roll any number of times you would like.

// Bonus: After finishing your rolls, print the largest value you rolled.

static void PrintDiceRolls(int Max, int Rolls){
    var numbers = DiceRoll(Max, Rolls);

    var max = numbers[0];

    foreach (int num in numbers){
        Console.WriteLine(num);
        if (num > max){
            max = num;
        }
    }

    Console.WriteLine($"The max of this list is {max}");
}

// Write a new function that will roll your 6-sided die until you land on a certain result and tracks how many rolls occurred until it lands on the given number. 
// For example, you could tell your code to keep rolling until your 6-sided die rolls the number 2. 
// When you land on the number, return a string that says "Rolled a {number} after {count} tries". 
// Tip: Do not hard-code the number you're looking for. 
// Be able to accept any number.

static string RollUntil(int target){
    var count = 0;

    Random rand = new Random();

    var isTarget = true;

    while (isTarget){
        var randomNum = rand.Next(1, 7);
        count++;

        if (randomNum == target){
            isTarget = false;
        }
    }
    
    return $"Rolled a {target} after {count} tries";
}

// Can you take some of the methods you wrote and combine them with what you learned about taking in user input and type casting to create an interactive dice roller? 
// Upon starting the project, a user should be prompted to ask what size of die they would like to roll (6-sided, 12-sided, 20-sided, etc...) and receive a result. 
// Optionally, you can also take input to determine if you would like to roll again or run a different function (like Roll Until). 
// Have fun with it!

static void UserInputs(){
    Console.WriteLine("Welcome! Would you like to roll for a number (1) or roll until you hit a number (2). Press press enter after your choice: ");

    string UserChoice = Console.ReadLine();

    if (UserChoice == "1"){
        bool invalidInput = true;
        int UserInput = 0;
        while (invalidInput){

            Console.WriteLine("Please enter the amount of sides you would like the die to have: ");
            string Number = Console.ReadLine();

            if (Int32.TryParse(Number, out int NumberSides)){
                UserInput = NumberSides;
                invalidInput = false;
            } else {
                Console.WriteLine("Not a valid number of sides for a dice to have. It must be an integer.");
            }
        }

        Random rand = new Random();
        int randomNum = rand.Next(1, UserInput+1);
        Console.WriteLine($"You rolled a {randomNum}. Would you like to run this program again? (y/n)");
        string Continue = Console.ReadLine();

        if (Continue == "y"){
            UserInputs();
        } else {
            Console.WriteLine($"Thanks for using this program! See you again soon");
        }
    }

    if (UserChoice == "2"){
        bool invalidInputForDice = true;
        bool invalidInputForTarget = true;
        int UserInput = 0;
        int Target = 0; 

        while (invalidInputForDice){

            Console.WriteLine("Please enter the amount of sides you would like the die to have: ");
            string Number = Console.ReadLine();

            if (Int32.TryParse(Number, out int NumberSides)){
                UserInput = NumberSides;
                invalidInputForDice = false;
            } else {
                Console.WriteLine("Not a valid number of sides for a dice to have. It must be an integer.");
            }
        }
        while (invalidInputForTarget){

            Console.WriteLine("Please enter the number you are trying to roll for: ");
            string targetNum = Console.ReadLine();

            if (Int32.TryParse(targetNum, out int UserTarget)){
                Target = UserTarget;
                invalidInputForTarget = false;
            } else {
                Console.WriteLine("Not a valid target number. It must be an integer.");
            }
        }

        int count = 0;

        Random rand = new Random();

        bool isTarget = true;

        while (isTarget){
            int randomNum = rand.Next(1, UserInput + 1);
            count++;

            if (randomNum == Target){
                isTarget = false;
            }
        }
        
        Console.WriteLine($"Rolled a {Target} after {count} tries using your {UserInput} sided die");
        Console.WriteLine("Would you like to use this program again? (y/n)");
        string Continue = Console.ReadLine();

        if (Continue == "y"){
            UserInputs();
        } else {
            Console.WriteLine($"Thanks for using this program! See you again soon");
        }
    }
}

UserInputs();