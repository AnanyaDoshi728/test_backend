const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 3000
const taskRouter = require('./routes/tasks')
const connectDatabase = require('./db/connection')
require('dotenv').config()

// app.use(express.static('./browser-app'))
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',taskRouter)

const start = async () => {
    try{
        await connectDatabase(process.env.CONNECTION_STRING)
        app.listen(PORT,console.log(`Listening on port ${PORT}`))
    }catch(error){
        console.log(error)
    }
}

start()



