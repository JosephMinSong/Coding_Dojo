public class Attack{
    string Name;

    int DamageAmount;

    public string _Name{
        get{ return Name; }
    }

    public int _DamageAmount{
        get { return DamageAmount; }
        set { DamageAmount = value; }
    }

    public Attack(string name, int damageAmount){
        Name = name;
        DamageAmount = damageAmount;
    }
}