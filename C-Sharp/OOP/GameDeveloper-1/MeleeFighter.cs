public class MeleeFighter : Enemy{

    public MeleeFighter(string name) : base (name){
        _Health = 120;
        AttackList = new List<Attack>() {new Attack("Punch", 20), new Attack("Kick", 15), new Attack("Tackle", 25)};
    }

    public Attack Rage(Enemy target){
        Attack randomAttack = base.RandomAttack();
        randomAttack._DamageAmount += 10;
        Console.WriteLine($"{ this._Name }, {randomAttack._Name}, {randomAttack._DamageAmount}");
        return randomAttack;
    }
}