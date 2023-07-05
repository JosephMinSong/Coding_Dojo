Vehicle One = new Vehicle("Toyota", 4, "Grey", true);

Vehicle Two = new Vehicle("Honda", "Blue");

Vehicle Three = new Vehicle("Lexus", "Black");

Vehicle Four = new Vehicle("Mazda", "Pink");

List<Vehicle> allVehicles = new List<Vehicle>() {One, Two, Three, Four};

allVehicles.ForEach(car => car.ShowInfo());

One.Travel(100);

One.ShowInfo();

// Bonuses : Setting Distance Traveled to public is not a good idea because then we are able
// to alter it without actually traveling. This could cause inaccurate travel distance and
// could cause many issues going forward. 

