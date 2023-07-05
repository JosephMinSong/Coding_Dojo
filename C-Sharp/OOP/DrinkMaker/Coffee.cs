public class Coffee : Drink {
    int CaffeineAmount;
    public int _CaffeineAmount{
        get { return CaffeineAmount; }
    }

    public Coffee(int caffeineAmount, string name, string color, double temp, int calories) : base(name, color, temp, false, calories){
        CaffeineAmount = caffeineAmount;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Caffeine Amount: {CaffeineAmount}");
    }
}