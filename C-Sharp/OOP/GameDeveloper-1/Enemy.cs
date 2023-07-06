public class Enemy{
    string Name;

    int Health;

    int MaxHealth;

    public List<Attack> AttackList;

    public string _Name{
        get{ return Name; }
    }

    public int _Health{
        get { return Health; }
        set { Health = value; }
    }

    public int _MaxHealth{
        get { return MaxHealth; }
        set { MaxHealth = value; }
    }

    public Enemy(string name){
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }

    public virtual Attack RandomAttack(){
        Random rand = new Random();
        int randomNum = rand.Next(AttackList.Count);
        return AttackList[randomNum];
    }

    public Enemy AddAttack(Attack attack){
        AttackList.Add(attack);
        return this;
    }

    public virtual void ShowInfo(){
        Console.WriteLine($"{Name} has {Health} health");
        string attackList = "";
        AttackList.ForEach(attack => attackList += attack._Name + $": {attack._DamageAmount} damage ");
        Console.WriteLine(attackList);
    }


    public virtual void PerformAttack(Enemy target, Attack attack){
        if (this._Health <= 0) Console.WriteLine("Dead people cannot attack...");
        if (target._Health <= 0) Console.WriteLine("Stop it! He's already dead!!");
        target._Health -= attack._DamageAmount;
    }
}

