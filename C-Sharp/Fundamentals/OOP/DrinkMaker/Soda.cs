public class Soda : Drink {
    double SugarAmount;
    public double _SugarAmount{
        get { return SugarAmount; }
    }

    bool Diet;
    public bool _Diet{
        get { return Diet; }
    }

    public Soda(double sugarAmount, bool diet, string name, double temp, int calories, string color) : base(name, color, temp, true, calories){
        SugarAmount = sugarAmount;
        Diet = diet;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Sugar amount: {SugarAmount}. Diet : {Diet}");
    }
}