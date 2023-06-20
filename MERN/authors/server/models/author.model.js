const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please enter a name']
    }
})

const Author = mongoose.model('Author', AuthorSchema)

module.export = Author