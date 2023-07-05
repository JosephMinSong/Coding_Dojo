class Enemy{
    string Name;

    int Health;

    List<Attack> AttackList;

    public string _Name{
        get{ return Name; }
    }

    public int _Health{
        get { return Health; }
    }

    public Enemy(string name){
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }

    public void RandomAttack(){
        Random rand = new Random();
        int numberOfAttacks = AttackList.Count;
        int randomNum = rand.Next(numberOfAttacks);
        Console.WriteLine($"{Name} used {AttackList[randomNum]._Name} and did {AttackList[randomNum]._DamageAmount} damage!");
    }

    public Enemy AddAttack(Attack attack){
        AttackList.Add(attack);
        return this;
    }

    public void ShowInfo(){
        Console.WriteLine($"{Name} has {Health} health");
        string attackList = "";
        AttackList.ForEach(attack => attackList += attack._Name + $": {attack._DamageAmount} damage ");
        Console.WriteLine(attackList);
    }

}