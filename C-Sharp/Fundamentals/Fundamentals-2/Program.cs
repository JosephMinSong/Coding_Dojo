// Three Basic Arrays

// Create an integer array with the values 0 through 9 inside
int[] firstArray = {0,1,2,3,4,5,6,7,8,9};

// Create a string array with the names "Tim", "Martin", "Nikki", "Sara"
string[] secondArray = {"Tim", "Martin", "Nikki", "Sara"};

// Create a boolean array of length 10. Then fill it with alternating true/false values, starting with true. 
// (Tip: do this using logic! Do not hard-code the values in!)
bool[] thirdArray = new bool[10];
for (int i = 0; i < thirdArray.Length; i++){
    if (i % 2 == 0){
        thirdArray[i] = true;
    } else {
        thirdArray[i] = false;
    }
}

// List of Flavors

// Create a string List of ice cream flavors that holds at least 5 different flavors. (Feel free to add more than 5!)
List<string> iceCream = new List<string>();

iceCream.Add("Strawbeery");
iceCream.Add("Chocolate");
iceCream.Add("Rocky Road");
iceCream.Add("Mint");
iceCream.Add("Coconut");

// Output the length of the List after you added the flavors.
Console.WriteLine(iceCream.Count);

// Output the third flavor in the List.
Console.WriteLine(iceCream[2]);

// Now remove the third flavor using its index location.
iceCream.RemoveAt(2);

// Output the length of the List again. It should now be one fewer.
Console.WriteLine(iceCream.Count);

// User Dictionary 

// Create a dictionary that will store string keys and string values
Dictionary<string, string> users = new Dictionary<string, string>();

Random rand = new Random();

for (int i = 0; i < secondArray.Length; i++){
    users.Add(secondArray[i] , iceCream[ (rand.Next(0, 4)) ]);
}

foreach( KeyValuePair<string, string> user in users){
    Console.WriteLine($"{ user.Key } - { user.Value }");
}