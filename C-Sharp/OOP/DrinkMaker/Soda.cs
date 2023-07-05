public class Soda : Drink {
    double SugarAmount;
    public double _SugarAmount{
        get { return SugarAmount; }
    }

    public Soda(double sugarAmount, string name, double temp, int calories, string color) : base(name, color, temp, true, calories){
        SugarAmount = sugarAmount;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Sugar amount: {SugarAmount}");
    }
}