const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxLength: [100,'name cannot be more than 100 charachters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Tasks',taskSchema)