public class Wine : Drink {
    int AlcoholContent;

    string Region;

    int Year;
    public int _AlcoholContent{
        get { return AlcoholContent; }
    }

    public string _Region{
        get { return Region; }
    }

    public int _Year{
        get { return Year; }
    }

    public Wine(string name, string color, double temp, bool isCarb, int calories, int alcoholContent, string region, int year) : base (name, color, temp, isCarb, calories){
        AlcoholContent = alcoholContent;
        Region = region;
        Year = year;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Alcohol Content: {AlcoholContent}. Region: {Region}. Year: {Year}");
    }
}