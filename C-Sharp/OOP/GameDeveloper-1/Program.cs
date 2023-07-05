Enemy One = new Enemy("Enemy One");
Attack FireBall = new Attack("FireBall", 20);
Attack Punch = new Attack("Punch", 5);
Attack Throw = new Attack("Throw", 10);

One.AddAttack(FireBall).AddAttack(Punch).AddAttack(Throw);

One.ShowInfo();

One.RandomAttack();