const mongoose = require('mongoose')
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const host = process.env.HOST
const dbName = process.env.DB
const uri = `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection to the DB') )
    .catch( () => console.log('Something went wrong when connecting to the DB', err) )
