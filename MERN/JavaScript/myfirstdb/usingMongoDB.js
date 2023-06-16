/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('my_first_db');

// Insert a few documents into the student collection.
// db.getCollection('students').insertMany([
//   {name: 'Joseph Song', home_state: 'Washington', lucky_number: 29, birthday: {month: 12, day: 29, year: 1995}},
//   {name: 'Kyle Marymee', home_state: 'Washington', lucky_number: 5, birthday: {month: 10, day: 20, year: 1990}},
//   {name: 'Christian Land', home_state: 'Washington', lucky_number: 7, birthday: {month: 6, day: 12, year: 1992}},
//   {name: 'Ken Kuang', home_state: 'California', lucky_number: 10, birthday: {month: 1, day: 1, year: 1996}},
//   {name: 'John Smith', home_state: 'New York', lucky_number: 99, birthday: {month: 5, day: 5, year: 1955}}
// ]);

// Get all students
db.students.find()

// Retrieve all students who are from California or Washington
// db.students.find({ $or : [ { home_state: 'California' }, { home_state : 'Washington' } ] })

//Get all students whose lucky number is greater than 3
// db.students.find({ lucky_number : { $gt: 3 } })

// Add a field to each student collection called 'interests' that is an array
// db.students.updateMany( {}, { $set: { interests: [ 'coding', 'brunch', 'MongoDB' ] } } )

// Add some unique interests for each particular student into each of their interest arrays
// db.students.update({name: 'Joseph Song'}, { $push : {interests : 'badminton'} })

// Add the interest 'taxes' into someone's interest array.
// db.students.update( {name: 'Christian Land'}, { $push : {interests : 'taxes'} } )

// Remove the 'taxes' interest you just added
// db.students.updateOne( {name: 'Christian Land'}, { $pull : {interests : 'taxes'} } )

// Remove all students who are from California.
// db.students.deleteMany({home_state : 'California'})

// Remove a student by name.
// db.students.deleteOne({name : 'John Smith'})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
// db.students.deleteOne({ lucky_number : { $gt: 5 } })

// Add a field to each student collection called 'number_of_belts' and set it to 0.
// db.students.updateMany( {}, {$set : { number_of_belts : 0 }} )

// Increment this field by 1 for all students in Washington (Seattle Dojo).
// db.students.updateMany( {home_state: 'Washington'}, {$inc : { number_of_belts: 1 }} )

// Add a 'updated_on' field, and set the value as the current date.
// db.students.updateMany( {}, {$currentDate: {createdAt : true}} )

