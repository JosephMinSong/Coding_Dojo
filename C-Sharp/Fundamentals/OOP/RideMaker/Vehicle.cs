public abstract class Vehicle{
    string Name;
    public string _Name{
        get{
            return Name;
        }
    }
    int Passengers;
    public int _Passengers{
        get{
            return Passengers;
        }
    }
    string Color;
    public string _Color{
        get{
            return Color;
        }
    }
    bool Engine;
    public bool _Engine{
        get{
            return Engine;
        }
    }
    double DistanceTraveled;
    public double _DistanceTraveled{
        get{
            return DistanceTraveled;
        }
    }

    public Vehicle(string name, int passengers, string color, bool engine){
        Name = name;
        Passengers = passengers;
        Color = color;
        Engine = engine;
        DistanceTraveled = 0;
    }

    public Vehicle(string name, string color){
        Name = name;
        Color = color;
        Engine = true;
        Passengers = 4;
        DistanceTraveled = 0;
    }

    public virtual void ShowInfo(){
        Console.WriteLine($"Name : {Name}. Passenger Capacity: {Passengers}. Color : {Color}. Has engine : {Engine}. Distance Traveled : {DistanceTraveled}");
    }

    public void Travel(double distance){
        DistanceTraveled += distance;
        Console.WriteLine($"Traveled {distance} and now our total distance traveled is: {DistanceTraveled}.");
    }
}
