public class MeleeFighter : Enemy{

    public Attack Punch = new Attack("Punch", 20);

    public Attack Kick = new Attack("Kick", 15);

    public Attack Tackle = new Attack("Tackle", 25);

    public MeleeFighter(string name) : base (name){
        _Health = 120;
        _MaxHealth = 120;
        AttackList = new List<Attack>() {Punch, Kick, Tackle};
    }

    public override void PerformAttack(Enemy target, Attack attack){
        base.PerformAttack(target, attack);
        if (attack == Punch){
            Console.WriteLine($"{this._Name} punched {target._Name} in the face for {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        } else if (attack == Kick){
            Console.WriteLine($"{this._Name} kicked {target._Name} in the balls for {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        } else {
            Console.WriteLine($"{this._Name} tackled {target._Name} to the ground for {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        }
    }

    public void Rage(Enemy target){
        Attack randomAttack = base.RandomAttack();
        randomAttack._DamageAmount += 10;
        Console.WriteLine($"{this._Name} used RAGE! His next attack deals 10 more damage. {this._Name} attacks {target._Name}, dealing {randomAttack._DamageAmount} damage and reducing {target._Name}'s health to {target._Health}!!");
    }
}