module.exports = ( io, socket ) => {

    socket.on('sendMessage', ({ message, id }) => {
        io.in(id).emit('incomingMessage', message)
    })

    socket.on('join', id => {
        socket.join(id)
    })
    
}