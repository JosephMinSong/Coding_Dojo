const express = require('express')
const app = express()
const port = 8000

// dotenv
require('dotenv').config()

// mongoose
require('./config/mongoose.config')

// cors
const cors = require('cors')

app.use(cors(), express.json(), express.urlencoded( {extended: true} ))

const AuthorRoutes = require('./routes/author.route')
AuthorRoutes(app)

app.listen(port, () => console.log(`Established connection on port : ${port}`))