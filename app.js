const { request } = require('express')
const express = require('express')
const app = express()

const taskRouter = require('./routes/tasks')
const connectDatabase = require('./db/connection')
require('dotenv').config()


// app.use(express.static('./browser-app'))

app.use(express.json())


app.get('/',(req,res) => {
    res.status(200).json({success: true,data: []})
})
app.use('/api/v1/tasks',taskRouter)

const start = async () => {
    try{
        await connectDatabase(process.env.CONNECTION_STRING)
        app.listen(process.env.PORT || 3000,console.log('Listening...'))
    }catch(error){
        console.log(error)
    }
}

start()



