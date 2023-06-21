const express = require('express')
const app = express()

const io = require('./Config/Socketio.config')

io.on('connection', socket => {
    require('./Events/Message.event')(io, socket)
})

io.attach(app.listen(8000, () => console.log('Connected to port 8000')))