List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!

// Use LINQ to find the first eruption that is in Chile and print the result.
IEnumerable<Eruption> firstEruptionInChile = eruptions.Where(x => x.Location == "Chile").Take(1);
PrintEach(firstEruptionInChile);

// Find the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found."
Eruption firstEruptionInHawaii = eruptions.Where(x => x.Location == "Hawaiian Is").OrderBy(y => y.Year).First();
if(firstEruptionInHawaii == null){
    Console.WriteLine("No Hawaiian Is Eruption Found");
} else {
    Console.WriteLine(firstEruptionInHawaii);
}

// Find the first eruption from the "Greenland" location and print it. If none is found, print "No Greenland Eruption found."
Eruption? firstEruptionInGreenland = eruptions.OrderBy(y => y.Year).FirstOrDefault(x => x.Location == "Greenland");
if(firstEruptionInGreenland == null){
    Console.WriteLine("No Greenland Eruption Found");
} else {
    Console.WriteLine(firstEruptionInGreenland);
}

// Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
Eruption? firstEruptionAfter1900AndInNewZealand = eruptions.Where(y => y.Year > 1900).FirstOrDefault(x => x.Location == "New Zealand");
if(firstEruptionAfter1900AndInNewZealand == null){
    Console.WriteLine("None found");
} else {
    Console.WriteLine(firstEruptionAfter1900AndInNewZealand);
}

// Find all eruptions where the volcano's elevation is over 2000m and print them.
List<Eruption> eruptionsOver2000 = eruptions.Where(x => x.ElevationInMeters > 2000).ToList();
PrintEach(eruptionsOver2000);

// Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
List<Eruption> volcanoStartsWithL = eruptions.Where(x => x.Volcano[0] == 'L').ToList();
PrintEach(volcanoStartsWithL);
Console.WriteLine(volcanoStartsWithL.Count);

// Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
int maxElevation = eruptions.Max(x => x.ElevationInMeters);
Console.WriteLine(maxElevation);

// Use the highest elevation variable to find and print the name of the Volcano with that elevation.
Eruption? highestElevationVolcano = eruptions.First(x => x.ElevationInMeters == maxElevation);
Console.WriteLine(highestElevationVolcano);

// Print all Volcano names alphabetically.
List<Eruption> alphabetically = eruptions.OrderBy(x => x.Volcano).ToList();
PrintEach(alphabetically);

// Print the sum of all the elevations of the volcanoes combined.
int sumOfElevations = eruptions.Sum(x => x.ElevationInMeters);
Console.WriteLine(sumOfElevations);

// Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
bool eruptedIn2000 = eruptions.Any(x => x.Year == 2000);
Console.WriteLine(eruptedIn2000);

// Find all stratovolcanoes and print just the first three (Hint: look up Take)
List<Eruption> allStratovolcanoes = eruptions.Where(x => x.Type == "Stratovolcano").Take(3).ToList();
PrintEach(allStratovolcanoes);

// Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
List<Eruption> eruptionsBefore1000Alpha = eruptions.Where(x => x.Year < 1000).OrderBy(y => y.Volcano).ToList();
PrintEach(eruptionsBefore1000Alpha);

// Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
List<string> eruptionsBefore1000AlphaName = eruptions.Where(x => x.Year < 1000).OrderBy(y => y.Volcano).Select(z => z.Volcano).ToList();
eruptionsBefore1000AlphaName.ForEach(name => Console.WriteLine(name));

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}
