public class Wine : Drink {
    int AlcoholContent;
    public int _AlcoholContent{
        get { return AlcoholContent; }
    }

    public Wine(string name, string color, double temp, bool isCarb, int calories, int alcoholContent) : base (name, color, temp, isCarb, calories){
        AlcoholContent = alcoholContent;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Alcohol Content: {AlcoholContent}");
    }
}