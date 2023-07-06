public class RangedFighter : Enemy {
    public Attack ArrowShot = new Attack("Shoot an Arrow", 20);

    public Attack KnifeThrow = new Attack("Throw a Knife", 15);

    int Distance;

    public int _Distance{
        get { return Distance; }
        set { Distance = value; }
    }

    public RangedFighter(string name) : base (name){
        Distance = 5;
        _MaxHealth = 100;
        AttackList = new List<Attack>() {ArrowShot, KnifeThrow};
    }

    public void Dash(){
        Console.WriteLine($"{this._Name} performed a dash!");
        _Distance = 20;
    }

    public override void PerformAttack(Enemy target, Attack attack){
        if (Distance > 10){
            base.PerformAttack(target, attack);
            if (attack == ArrowShot){
                Console.WriteLine($"{this._Name} shot a flurry of arrows, dealing {attack._DamageAmount} damage to {target._Name}, reducing {target._Name}'s health to {target._Health}");
            } else {
                Console.WriteLine($"{this._Name} threw a bunch of knives at {target._Name}, dealing {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
            }
        } else {
            Console.WriteLine("Target is too close to hit");
        }
    }
}