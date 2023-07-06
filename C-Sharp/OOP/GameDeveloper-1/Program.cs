// FROM GAME DEVELOPER 1********************
// Enemy One = new Enemy("Enemy One");
// Attack FireBall = new Attack("FireBall", 20);
// Attack Punch = new Attack("Punch", 5);
// Attack Throw = new Attack("Throw", 10);

// One.AddAttack(FireBall).AddAttack(Punch).AddAttack(Throw);

// One.ShowInfo();

// One.RandomAttack();

// FROM GAME DEVELOPER 2****************
// Create instances of the Melee, Ranged, and Magic Caster classes

MeleeFighter melee = new MeleeFighter("Melee");
RangedFighter ranged = new RangedFighter("Ranged");
MagicCaster magic = new MagicCaster("Magic");

// Perform the Kick Attack from your Melee class character on your Ranged character
melee.PerformAttack(ranged, melee.Kick);

// Perform the Rage method from your Melee class character on your Magic Caster character
melee.Rage(magic);

// Perform the Shoot an Arrow Attack from your Ranged character on your Melee character (if you wrote everything as listed above, you should not have been able to attack due to the Distance constraint)
ranged.PerformAttack(melee, ranged.ArrowShot);

// Have your Ranged character perform the Dash method
ranged.Dash();

// Perform another Shoot an Arrow Attack from your Ranged character (this one should have worked now if everything is set up properly)
ranged.PerformAttack(melee, ranged.ArrowShot);

// Perform a Fireball Attack from your Magic Caster on your Melee character
magic.PerformAttack(melee, magic.Fireball);

// Have the Magic Caster perform the Heal method on the Ranged character

magic.Heal(ranged);

// Have the Magic Caster perform the Heal method on themselves

magic.Heal(magic);

// You may have noticed that when you Heal a character they can end up with more health than they started with. Can you think of a clever way to ensure that your character does not go above their maximum health?

// Enemy Class now has max health stat that can be changed in each child class to fit their max health stat. Healing above that max health stat will only get them to their max health value.



