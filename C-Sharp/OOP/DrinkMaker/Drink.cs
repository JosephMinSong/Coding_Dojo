public class Drink
{
    protected string Name;
    protected string Color;
    protected double Temperature;
    protected bool IsCarbonated;
    protected int Calories;
    
    // We need a basic constructor that takes all these features in
    public Drink(string name, string color, double temp, bool isCarb, int calories)
    {
        Name = name;
        Color = color;
        Temperature = temp;
        IsCarbonated = isCarb;
        Calories = calories;
    }

    public virtual void ShowInfo(){
        Console.WriteLine($"Name: {Name}, Color: {Color}, Temperature: {Temperature}, Carbonated: {IsCarbonated}, Calories: {Calories}");
    }
}

