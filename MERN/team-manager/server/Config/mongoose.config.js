const mongoose = require('mongoose')
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const host = process.env.HOST 
const dbName = process.env.dbName 
const uri = `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Connected to the DB') )
    .catch( err => console.log('Something went wrong', err) )