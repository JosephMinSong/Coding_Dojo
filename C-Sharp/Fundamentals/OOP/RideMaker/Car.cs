public class Car : Vehicle, INeedFuel{
    public string FuelType {get;set;}

    public int FuelTotal {get;set;}

    public Car(string name, int passengers, string color, bool engine, string fuelType) : base(name, passengers, color, engine){
        FuelType = fuelType;
        FuelTotal = 10;
    }

    public void GiveFuel(int Amount){
        FuelTotal += Amount;
        Console.WriteLine($"{this._Name} was given {Amount} of fuel and now has {FuelTotal} of fuel.");
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
    }
}