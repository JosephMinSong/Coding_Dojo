public class Enemy{
    string Name;

    int Health;

    public List<Attack> AttackList;

    public string _Name{
        get{ return Name; }
    }

    public int _Health{
        get { return Health; }
        set { Health = value; }
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
        target._Health -= attack._DamageAmount;

        Console.WriteLine($"{Name} attacks {target._Name}, dealing {attack._DamageAmount} damage and reducing {target._Name}'s health to {target._Health}!!");
    }
}

