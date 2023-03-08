const Tasks = require('../models/Task')

const getAllTasks = async (req,res) => {
    try{
        const allTasks = await Tasks.find()
        res.status(201).json({allTasks})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const createTask = async (req,res) => {
    try{
        const task = await Tasks.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({message: error})
    }
}

const getSingleTask = async (req,res) => {
    try{
        const {id:taskId} = req.params
        const singleTask = await Tasks.findOne({_id: taskId})
        if(!singleTask){
            return res.status(404).send(`No task with id ${taskId}`)
        }
        res.status(200).json({singleTask})
    }catch(error){
        res.status(500).json({message: error})
    }
}


const deleteTask = async (req,res) => {
    try{
        const {id:taskId} = req.params
        const deletedTask = await Tasks.findOneAndDelete({_id: taskId})
        if(!deletedTask){
            return res.status(404).json(`No task with id ${taskId}`)
        }
        res.status(200).json({task: null,success: true})
    }catch(error){
        res.status(500).json({message:error})
    }
}

const updateTask = async (req,res) => {
    try{
    const {id:taskId} = req.params
    const updatedTask = await Tasks.findOneAndUpdate({_id: taskId},req.body,
        {new: true,runValidators: true})
    if(!updatedTask){
        return res.status(404).json(`No task wit id ${taskId}`)
    }
    res.status(200).json({updateTask})
    }
    catch(error){
        res.status(500).json({message: error})
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}