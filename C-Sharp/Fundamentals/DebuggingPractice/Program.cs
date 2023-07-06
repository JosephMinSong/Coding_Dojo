// Challenge 1
bool amProgrammer = true;
double Age = 27.9;
List<string> Names = new List<string>();
Names.Add("Monica");
Dictionary<string, string> MyDictionary = new Dictionary<string, string>();
MyDictionary.Add("Hello", "0");
MyDictionary.Add("Hi there", "0");
// This is a tricky one! Hint: look up what a char is in C#
string MyName = "MyName";


// Challenge 2
var Numbers = new List<int>() {2,3,6,7,1,5};
for(int i = Numbers.Count; i <= 0; i--)
{
    Console.WriteLine(Numbers[i]);
}


// Challenge 3
var MoreNumbers = new List<int>() {12,7,10,-3,9};
foreach(int i in MoreNumbers)
{
    Console.WriteLine(i);
}


// Challenge 4
var EvenMoreNumbers = new List<int> {3,6,9,12,14};
for (int i = 0; i < EvenMoreNumbers.Count; i++){
    if (EvenMoreNumbers[i] % 3 == 0){
        EvenMoreNumbers[i] = 0;
    }
}


// Challenge 5
// What can we learn from this error message?
string MyString = "superduberawesome";
// MyString[7] = "p";

// Strings are immuatable in C Sharp


// Challenge 6
// Hint: some bugs don't come with error messages
Random rand = new Random();
int randomNum = rand.Next(12);
if(randomNum == 12)
{
    Console.WriteLine("Hello");
    // This will never run because 12 is exclusive of the range
    // we could fix this by increasing the range in line 49 or decreasing the number in line 50
}



