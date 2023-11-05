const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')


const app = express()
app.use(cors({origin:'http://localhost:8080' }))
const httpServer = createServer(app);
const io = new Server(httpServer, {cors: 'http://localhost:8080'})

io.on("connection", () => {

    console.log("Server Connected")
})

httpServer.listen(5000)