public class Coffee : Drink {
    int CaffeineAmount;

    string Roast;

    string Bean;

    public int _CaffeineAmount{
        get { return CaffeineAmount; }
    }

    public string _Roast{
        get { return Roast; }
    }

    public string _Bean{
        get { return Bean; }
    }

    public Coffee(int caffeineAmount, string roast, string bean, string name, string color, double temp, int calories) : base(name, color, temp, false, calories){
        CaffeineAmount = caffeineAmount;
        Roast = roast;
        Bean = bean;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Caffeine Amount: {CaffeineAmount}. Roast: {Roast}. Bean: {Bean}");
    }
}