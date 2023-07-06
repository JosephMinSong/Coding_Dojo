public class MagicCaster : Enemy{
    public Attack Fireball = new Attack("Fireball", 25);

    public Attack LightningBolt = new Attack("Lightning Bolt", 20);

    public Attack StaffStrike = new Attack("Staff Strike", 10);

    public MagicCaster(string name) : base(name){
        _Health = 80;
        _MaxHealth = 80;
        AttackList = new List<Attack>() {Fireball, LightningBolt, StaffStrike};
    }

    public virtual void Heal(Enemy target){
        int prevHealth = target._Health;
        target._Health += 40;
        if (target._Health > target._MaxHealth){
            target._Health = target._MaxHealth;
        }
        Console.WriteLine($"{target._Name} was healed and their health went from {prevHealth} to {target._Health}.");
    }

    public override void PerformAttack(Enemy target, Attack attack){
        base.PerformAttack(target, attack);
        if (attack == Fireball){
            Console.WriteLine($"{this._Name} conjured and threw a fireball at {target._Name}, dealing {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        } else if (attack == LightningBolt){
            Console.WriteLine($"{this._Name} conjured a lightning bold and struck {target._Name} for {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        } else {
            Console.WriteLine($"{this._Name} struck {target._Name} with his staff, dealing {attack._DamageAmount} damage, reducing {target._Name}'s health to {target._Health}!");
        }
    }
}