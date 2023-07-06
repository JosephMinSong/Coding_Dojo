// From RideMaker OG

// Vehicle One = new Vehicle("Toyota", 4, "Grey", true);

// Vehicle Two = new Vehicle("Honda", "Blue");

// Vehicle Three = new Vehicle("Lexus", "Black");

// Vehicle Four = new Vehicle("Mazda", "Pink");

// List<Vehicle> allVehicles = new List<Vehicle>() {One, Two, Three, Four};

// allVehicles.ForEach(car => car.ShowInfo());

// One.Travel(100);

// One.ShowInfo();

// Bonuses : Setting Distance Traveled to public is not a good idea because then we are able
// to alter it without actually traveling. This could cause inaccurate travel distance and
// could cause many issues going forward. 

// Fuel UP!
Car car = new Car("Car", 4, "Black", true, "Gas");
Car car2 = new Car("Car2", 6, "Blue", true, "Gas");
Horse horse = new Horse("Horse", 2, "Brown");
Bicycle bicycle = new Bicycle("Bicycle", 2, "Green");

List<Vehicle> AllVehicles = new List<Vehicle>() {car, car2, horse, bicycle};
List<INeedFuel> AllFuelVehicles = new List<INeedFuel>();

AllVehicles.ForEach(vehicle => {
    if (vehicle is INeedFuel){
        AllFuelVehicles.Add((INeedFuel) vehicle);
    }
});

AllFuelVehicles.ForEach(fuelVehicle => {
    fuelVehicle.GiveFuel(10);
});

AllFuelVehicles.ForEach(fuelVehicle => {
    Console.WriteLine($"{fuelVehicle} : {fuelVehicle.FuelTotal}");
});


