const express = require('express')
const app = express()
require('dotenv').config()
const port = 8000
require('./config/mongoose.config')

app.use(express.json(), express.urlencoded( {extended: true} ))

const AllRoutes = require('./routes/joke.routes')
AllRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))
