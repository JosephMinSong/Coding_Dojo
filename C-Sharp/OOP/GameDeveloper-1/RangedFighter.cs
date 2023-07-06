public class RangedFighter : Enemy {
    Attack ArrowShot = new Attack("Shoot an Arrow", 20);

    Attack KnifeThrow = new Attack("Throw a Knife", 15);
    int Distance;

    public int _Distance{
        get { return Distance; }
        set { Distance = value; }
    }

    public RangedFighter(string name) : base (name){
        Distance = 5;
        AttackList = new List<Attack>() {ArrowShot, KnifeThrow};
    }

    public void Dash(){
        Console.WriteLine($"{this._Name} performed a dash!");
        _Distance = 20;
    }

    public override void PerformAttack(Enemy target, Attack attack){
        if (Distance > 10){
            base.PerformAttack(target, attack);
        } else {
            Console.WriteLine("Target is too close to hit");
        }
    }
}