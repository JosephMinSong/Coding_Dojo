public class MeleeFighter : Enemy{

    public Attack Punch = new Attack("Punch", 20);

    public Attack Kick = new Attack("Kick", 15);

    public Attack Tackle = new Attack("Tackle", 25);

    public MeleeFighter(string name) : base (name){
        _Health = 120;
        AttackList = new List<Attack>() {Punch, Kick, Tackle};
    }

    public Attack Rage(Enemy target){
        Attack randomAttack = base.RandomAttack();
        randomAttack._DamageAmount += 10;
        Console.WriteLine($"{ this._Name }, {randomAttack._Name}, {randomAttack._DamageAmount}");
        return randomAttack;
    }
}